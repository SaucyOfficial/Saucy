<script>

/* globals MediaRecorder */
// Spec is at http://dvcs.w3.org/hg/dap/raw-file/tip/media-stream-capture/RecordingProposal.html

var constraints = {audio:true,video:{width:{min:640,ideal:640,max:640 },height:{ min:480,ideal:480,max:480}, facingMode: { exact: "user" }, framerate:60}};

var recBtn = document.querySelector('button#rec');
var pauseResBtn = document.querySelector('button#pauseRes');
var stopBtn = document.querySelector('button#stop');

var liveVideoElement = document.querySelector('#live');
var playbackVideoElement = document.querySelector('#playback');
var dataElement = document.querySelector('#data');
var downloadLink = document.querySelector('a#downloadLink');

liveVideoElement.controls = false;
playbackVideoElement.controls=false;

var mediaRecorder;
var chunks = [];
var count = 0;
var localStream = null;
var soundMeter  = null;
var containerType = "video/webm"; //defaults to webm but we switch to mp4 on Safari 14.0.2+

if (!navigator.mediaDevices.getUserMedia){
	alert('navigator.mediaDevices.getUserMedia not supported on your browser, use the latest version of Firefox or Chrome');
}else{
	if (window.MediaRecorder == undefined) {
			alert('MediaRecorder not supported on your browser, use the latest version of Firefox or Chrome');
	}else{
		navigator.mediaDevices.getUserMedia(constraints)
			.then(function(stream) {
				localStream = stream;
				
				localStream.getTracks().forEach(function(track) {
					if(track.kind == "audio"){
						track.onended = function(event){
							 log("audio track.onended Audio track.readyState="+track.readyState+", track.muted=" + track.muted);
						}
					}
					if(track.kind == "video"){
						track.onended = function(event){
							log("video track.onended Audio track.readyState="+track.readyState+", track.muted=" + track.muted);
						}
					}
				});
				
				liveVideoElement.srcObject = localStream;
				liveVideoElement.play();
				
				try {
					window.AudioContext = window.AudioContext || window.webkitAudioContext;
					window.audioContext = new AudioContext();
				  } catch (e) {
					log('Web Audio API not supported.');
				  }

				  soundMeter = window.soundMeter = new SoundMeter(window.audioContext);
				  soundMeter.connectToSource(localStream, function(e) {
					if (e) {
						log(e);
						return;
					}else{
					   /*setInterval(function() {
						  log(Math.round(soundMeter.instant.toFixed(2) * 100));
					  }, 100);*/
					}
				  });
				
			}).catch(function(err) {
				/* handle the error */
				log('navigator.getUserMedia error: '+err);
			});
	}
}

function onBtnRecordClicked (){
	if (localStream == null) {
		alert('Could not get local stream from mic/camera');
	}else {
		recBtn.disabled = true;
		pauseResBtn.disabled = false;
		stopBtn.disabled = false;

		chunks = [];

		/* use the stream */
		log('Start recording...');
		if (typeof MediaRecorder.isTypeSupported == 'function'){
			/*
				MediaRecorder.isTypeSupported is a function announced in https://developers.google.com/web/updates/2016/01/mediarecorder and later introduced in the MediaRecorder API spec http://www.w3.org/TR/mediastream-recording/
			*/
			if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
			  var options = {mimeType: 'video/webm;codecs=vp9'};
			} else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
			  var options = {mimeType: 'video/webm;codecs=h264'};
			} else  if (MediaRecorder.isTypeSupported('video/webm')) {
			  var options = {mimeType: 'video/webm'};
			} else  if (MediaRecorder.isTypeSupported('video/mp4')) {
			  //Safari 14.0.2 has an EXPERIMENTAL version of MediaRecorder enabled by default
			  containerType = "video/mp4";
			  var options = {mimeType: 'video/mp4'};
			}
			log('Using '+options.mimeType);
			mediaRecorder = new MediaRecorder(localStream, options);
		}else{
			log('isTypeSupported is not supported, using default codecs for browser');
			mediaRecorder = new MediaRecorder(localStream);
		}

		mediaRecorder.ondataavailable = function(e) {
			log('mediaRecorder.ondataavailable, e.data.size='+e.data.size);
			if (e.data && e.data.size > 0) {
				chunks.push(e.data);
			}
		};

		mediaRecorder.onerror = function(e){
			log('mediaRecorder.onerror: ' + e);
		};

		mediaRecorder.onstart = function(){
			log('mediaRecorder.onstart, mediaRecorder.state = ' + mediaRecorder.state);
			
			localStream.getTracks().forEach(function(track) {
              if(track.kind == "audio"){
                log("onstart - Audio track.readyState="+track.readyState+", track.muted=" + track.muted);
              }
              if(track.kind == "video"){
                log("onstart - Video track.readyState="+track.readyState+", track.muted=" + track.muted);
              }
            });
			
		};

		mediaRecorder.onstop = function(){
			log('mediaRecorder.onstop, mediaRecorder.state = ' + mediaRecorder.state);

			//var recording = new Blob(chunks, {type: containerType});
			var recording = new Blob(chunks, {type: mediaRecorder.mimeType});
			

			downloadLink.href = URL.createObjectURL(recording);

			/* 
				srcObject code from https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
			*/

			/*if ('srcObject' in playbackVideoElement) {
			  try {
			    playbackVideoElement.srcObject = recording;
			  } catch (err) {
			    if (err.name != "TypeError") {
			      throw err;
			    }*/
			    // Even if they do, they may only support MediaStream
			    playbackVideoElement.src = URL.createObjectURL(recording);
			/*  }
			} else {
			  playbackVideoElement.src = URL.createObjectURL(recording);
			} */

			playbackVideoElement.controls = true;
			playbackVideoElement.play();

			var rand =  Math.floor((Math.random() * 10000000));
			switch(containerType){
				case "video/mp4":
					var name  = "video_"+rand+".mp4" ;
					break;
				default:
					var name  = "video_"+rand+".webm" ;
			}

			downloadLink.innerHTML = 'Download '+name;

			downloadLink.setAttribute( "download", name);
			downloadLink.setAttribute( "name", name);
		};

		mediaRecorder.onpause = function(){
			log('mediaRecorder.onpause, mediaRecorder.state = ' + mediaRecorder.state);
		}

		mediaRecorder.onresume = function(){
			log('mediaRecorder.onresume, mediaRecorder.state = ' + mediaRecorder.state);
		}

		mediaRecorder.onwarning = function(e){
			log('mediaRecorder.onwarning: ' + e);
		};


		mediaRecorder.start(1000);

		localStream.getTracks().forEach(function(track) {
			log(track.kind+":"+JSON.stringify(track.getSettings()));
			console.log(track.getSettings());
		})
	}
}

navigator.mediaDevices.ondevicechange = function(event) {
	log("mediaDevices.ondevicechange");
	/*
	if (localStream != null){
		localStream.getTracks().forEach(function(track) {
			if(track.kind == "audio"){
				track.onended = function(event){
					log("audio track.onended");
				}
			}
		});
	}
	*/
}

function onBtnStopClicked(){
	mediaRecorder.stop();
	recBtn.disabled = false;
	pauseResBtn.disabled = true;
	stopBtn.disabled = true;
}

function onPauseResumeClicked(){
	if(pauseResBtn.textContent === "Pause"){
		pauseResBtn.textContent = "Resume";
		mediaRecorder.pause();
		stopBtn.disabled = true;
	}else{
		pauseResBtn.textContent = "Pause";
		mediaRecorder.resume();
		stopBtn.disabled = false;
	}
	recBtn.disabled = true;
	pauseResBtn.disabled = false;
}

function onStateClicked(){
	
	if(mediaRecorder != null && localStream != null && soundMeter != null){
		log("mediaRecorder.state="+mediaRecorder.state);
		log("mediaRecorder.mimeType="+mediaRecorder.mimeType);
		log("mediaRecorder.videoBitsPerSecond="+mediaRecorder.videoBitsPerSecond);
		log("mediaRecorder.audioBitsPerSecond="+mediaRecorder.audioBitsPerSecond);

		localStream.getTracks().forEach(function(track) {
			if(track.kind == "audio"){
				log("Audio: track.readyState="+track.readyState+", track.muted=" + track.muted);
			}
			if(track.kind == "video"){
				log("Video: track.readyState="+track.readyState+", track.muted=" + track.muted);
			}
		});
		
		log("Audio activity: " + Math.round(soundMeter.instant.toFixed(2) * 100));
	}
	
}

function log(message){
	dataElement.innerHTML = dataElement.innerHTML+'<br>'+message ;
	console.log(message)
}

// Meter class that generates a number correlated to audio volume.
// The meter class itself displays nothing, but it makes the
// instantaneous and time-decaying volumes available for inspection.
// It also reports on the fraction of samples that were at or near
// the top of the measurement range.
function SoundMeter(context) {
  this.context = context;
  this.instant = 0.0;
  this.slow = 0.0;
  this.clip = 0.0;
  this.script = context.createScriptProcessor(2048, 1, 1);
  var that = this;
  this.script.onaudioprocess = function(event) {
	var input = event.inputBuffer.getChannelData(0);
	var i;
	var sum = 0.0;
	var clipcount = 0;
	for (i = 0; i < input.length; ++i) {
	  sum += input[i] * input[i];
	  if (Math.abs(input[i]) > 0.99) {
		clipcount += 1;
	  }
	}
	that.instant = Math.sqrt(sum / input.length);
	that.slow = 0.95 * that.slow + 0.05 * that.instant;
	that.clip = clipcount / input.length;
  };
}

SoundMeter.prototype.connectToSource = function(stream, callback) {
  console.log('SoundMeter connecting');
  try {
	this.mic = this.context.createMediaStreamSource(stream);
	this.mic.connect(this.script);
	// necessary to make sample run, but should not be.
	this.script.connect(this.context.destination);
	if (typeof callback !== 'undefined') {
	  callback(null);
	}
  } catch (e) {
	console.error(e);
	if (typeof callback !== 'undefined') {
	  callback(e);
	}
  }
};
SoundMeter.prototype.stop = function() {
  this.mic.disconnect();
  this.script.disconnect();
};


//browser ID
function getBrowser(){
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	 browserName = "Opera";
	 fullVersion = nAgt.substring(verOffset+6);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1)
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	 browserName = "Microsoft Internet Explorer";
	 fullVersion = nAgt.substring(verOffset+5);
	}
	// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	 browserName = "Chrome";
	 fullVersion = nAgt.substring(verOffset+7);
	}
	// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	 browserName = "Safari";
	 fullVersion = nAgt.substring(verOffset+7);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1)
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	 browserName = "Firefox";
	 fullVersion = nAgt.substring(verOffset+8);
	}
	// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
		   (verOffset=nAgt.lastIndexOf('/')) )
	{
	 browserName = nAgt.substring(nameOffset,verOffset);
	 fullVersion = nAgt.substring(verOffset+1);
	 if (browserName.toLowerCase()==browserName.toUpperCase()) {
	  browserName = navigator.appName;
	 }
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix=fullVersion.indexOf(";"))!=-1)
	   fullVersion=fullVersion.substring(0,ix);
	if ((ix=fullVersion.indexOf(" "))!=-1)
	   fullVersion=fullVersion.substring(0,ix);

	majorVersion = parseInt(''+fullVersion,10);
	if (isNaN(majorVersion)) {
	 fullVersion  = ''+parseFloat(navigator.appVersion);
	 majorVersion = parseInt(navigator.appVersion,10);
	}


	return browserName;
}
</script><svelte:head><title>Vlog</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Vlog">
<meta name="description" content="Record videos so you can create content to upload to video sharing websites.">
<meta name="keywords" content="record video, record videos, create content, record content">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<base target="_blank">
	<title>Media Recorder API Demo  - addpipe.com</title>
	<!-- Latest compiled and minified Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="css/main.css" />
<div>
	<style>
	#pauseRec,  #stateButton, #data {
	    display:none;
}
	</style>
	<div>
		<video id="live" controls autoplay playsinline></video> <video id="playback" controls autoplay></video><br>
		<div id="controls">
			<button id="rec" onclick="onBtnRecordClicked()">Start</button>
			<button id="pauseRes"   onclick="onPauseResumeClicked()" disabled></button>
			<button id="stop"  onclick="onBtnStopClicked()" disabled>Stop</button>
			<button id="record" onclick="window.location.href='/record'">Record</button>
		</div>
	</div>
	<a id="downloadLink" download="mediarecorder.webm" name="mediarecorder.webm" href></a>
	<p id="data"></p>
	<script src="https://webrtchacks.github.io/adapter/adapter-latest.js"></script>
</div>



<style>
pre {
	padding: 0px;
	border:0px;
	border-radius: 0px;
}

red {
	color: red;
}

a {
  color: #4183c4;
  font-weight: 300;
  text-decoration: none;
}

a:hover {
  color: #3d85c6;
  text-decoration: underline;
}

a#downloadLink {
  display: block;
  margin: 0 0 1em 0;
  min-height: 1.2em;
}

div#container {
  margin: 0 auto 0 auto;
  max-width: 720px;
  padding: 1em 1.5em 1.3em 1.5em;
}

h3 {
  border-top: 1px solid #eee;
  color: #666;
  font-size: 0.9em;
  font-weight: 500;
  margin: 20px 0 10px 0;
  padding: 10px 0 0 0;
  white-space: nowrap;
}

p#data {
  border-top: 1px dotted #666;
  font-family: Courier New, monospace;
  line-height: 1.3em;
  min-height: 6em;
  max-height: 1000px;
  overflow-y: auto;
  padding: 1em 0 0 0;
}

video {
  background: #222;
  margin: 10px auto;
  width: 320px;
  height: 240px;
}

#controls {
  display: flex;
  margin-top: 2rem;
  max-width: 28em;
}

button {
  flex-grow: 1;
  height: 3.5rem;
  min-width: 2rem;
  border: none;
  border-radius: 0.15rem;
  background: #ed341d;
  margin-left: 2px;
  box-shadow: inset 0 -0.15rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#ffffff;
  font-weight: bold;
  font-size: 1.5rem;
}
button:hover, button:focus {
  outline: none;
  background: #c72d1c;
}
button::-moz-focus-inner {
  border: 0;
}
button:active {
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
  line-height: 3rem;
}
button:disabled {
  pointer-events: none;
  background: lightgray;
}
button:first-child {
  margin-left: 0;
}
</style>



