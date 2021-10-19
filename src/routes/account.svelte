<script>
  
  
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
          document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('img', e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);


  if(localStorage.img) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list').insertBefore(span, null);
    
    }

 // Loop through the FileList and render image files as thumbnails.
 for (var i = 0, f; f = files[i]; i++) {

   // Only process image files.
   if (!f.type.match('image.*')) {
     continue;
   }

   var reader = new FileReader();

   // Closure to capture the file information.
   reader.onload = (function(theFile) {
     return function(e) {
       // Render thumbnail.
       var span = document.createElement('span');
       span.innerHTML = ['<img class="thumb" src="', e.target.result,
                         '" title="', escape(theFile.name), '"/>'].join('');
         
       document.getElementById('list').insertBefore(span, null);
       localStorage.setItem('img', e.target.result);
     };
   })(f);

   // Read in the image file as a data URL.
   reader.readAsDataURL(f);
 }


document.getElementById('files').addEventListener('change', handleFileSelect, false);


if(localStorage.img) { 

      var span = document.createElement('span');
       span.innerHTML += ['<img class="thumb" src="', localStorage.img,
                         '" title="test"/>'].join('');

       document.getElementById('list').insertBefore(span, null);
 
 }

//
document.querySelector("#cachedEmailDisplay").innerHTML	= localStorage.emailFinal3;
document.querySelector("cachedNameDisplay").innerHTML 	= localstorage.nameFinal
	
var username = document.getElementById("cachedName").value;
var email    = document.getElementById("cachedEmail").value;

function displayCachedEmail() {
	localStorage.emailFinal3 	= document.getElementById("cachedEmail").value;
	console.log(localStorage.emailFinal3);
  
	document.getElementById("cachedEmailDisplay").innerHTML	= localStorage.emailFinal3;
	}

function displayCachedName() {
	localStorage.nameFinal = document.getElementById("cachedName").value;
	console.log(localStorage.nameFinal);
	
	document.getElementById("cachedNameDisplay").innerHTML = localStorage.nameFinal;
}
		

var color = function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var bgcolor = document.body.style.backgroundColor;

setInterval(function() { 
    document.body.style.backgroundColor = color(); //() to execute the function!
}, 60000);



















































function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
        var am_pm = today.getHours() >= 12 ? "PM" : "AM";
   var mid = 'pm';
    if (m < 10) {
      m = "" + m;
    }
    if (h > 12) {
      h = h - 12;
    }    
    if(h==0){ 
      h=12;
    }
    if(h < 12) {
       mid = 'am';
    }     
 
  

    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m + " " +  am_pm;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();
</script><svelte:head><title>Account</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Account">
<meta name="description" content="Your account at Saucy.">
<meta name="keywords" content="account, saucy account">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  

<br><br><br><br>



<center>

	<div class="greeting"></div>
<h2 class="rainbow" id="cachedEmailDisplay">
		</h2>
	
	
<input type="text" id="cachedEmail" >
	<button onclick = "displayCachedEmail()">Change Username</button>
	
</center>

<style>
@import url(https://fonts.googleapis.com/css?family=PT+Sans+Narrow);
@import url(https://fonts.googleapis.com/css?family=Merriweather+Sans|Exo+2|Maven+Pro);


button{
	padding: 12px;
	font-family: 'Exo 2', sans-serif;
}
p {
	font-size: 25px;

}

p1{
	padding: 2%;
}
#cachedEmail {
	text-align: center;
	background: transparent;
	border: none;
	padding: 1.5%;
	font-size: 15px;
	border-bottom: solid #aaa;
	outline: none;
	font-family: 'PT Sans Narrow', sans-serif;
}

p{
	color: #000;
	padding: 2%;
	font-family: 'Maven Pro', sans-serif;
}

button{
	border-radius: 15px;
	margin: 10px;
}

h1{
  color:rgba(100, 50, 255, .8);
}
.rainbow {
   /* Chrome, Safari, Opera */
  -webkit-animation: rainbow 20s infinite; 
  
  /* Internet Explorer */
  -ms-animation: rainbow 20s infinite;
  
  /* Standar Syntax */
  animation: rainbow 20s infinite; 
}

/* Chrome, Safari, Opera */
@-webkit-keyframes rainbow{
	20%{color: red;}
	40%{color: yellow;}
	60%{color: green;}
	80%{color: blue;}
	100%{color: orange;}	
}
/* Internet Explorer */
@-ms-keyframes rainbow{
	20%{color: red;}
	40%{color: yellow;}
	60%{color: green;}
	80%{color: blue;}
	100%{color: orange;}	
}

/* Standar Syntax */
@keyframes rainbow{
	20%{color: red;}
	40%{color: yellow;}
	60%{color: green;}
	80%{color: blue;}
	100%{color: orange;}	
}





.rainbow {
  font-size: 60px;
  margin-top: 5%;
}


@media only screen 
  and (max-device-width: 480px) {
    
   
.rainbow {
  font-size: 35px;
}
}

/* Profile Picture and Username */
.thumb {
 height: 200px;
 border: 1px solid #000;
 margin: 0px 0px 0px 0px;
}
#parent {
 overflow: hidden;


}
.right {
 float: center;
 height: 300px;
width: 100%;
 background: transparent;
}

@media only screen 
and (max-device-width: 480px) {




}
.right {
 height: 400px;
     margin: 0 35% 0px 0px;



}


/* Profile Picture and Username */
.thumb {
 height: 200px;
 border: 1px solid #000;
 margin: 0px 0px 0px 0px;
}
#parent {
 overflow: hidden;


}
.right {
 float: center;
 height: 300px;
width: 50%;
 background: transparent;
}


h2, a {
font-family: Arial;
   text-decoration: none;

}

a:link {
 color: #9555c2;

}

a:hover {
color: #33ccff;

}




.button {
color: #666666;
background-color: #eeeeee;
border-color: #eeeeee;
font-weight: 300;
font-size: 16px;
font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
text-decoration: none;
text-align: center;
line-height: 40px;
height: 40px;
padding: 0 30px;
margin: 0;
display: inline-block;
appearance: none;
cursor: pointer;
border: none;
-webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
       box-sizing: border-box;
-webkit-transition-property: all;
       transition-property: all;
-webkit-transition-duration: .3s;
       transition-duration: .3s;
}

.button-royal,
.button-royal-flat {
background-color: #8c48b7;
border-color: #7b72e9;
color: white; }
.button-royal:visited,
.button-royal-flat:visited {
 color: white; }
.button-royal:hover, .button-royal:focus,
.button-royal-flat:hover,
.button-royal-flat:focus {
 background-color: #975abe;
 border-color: #a49ef0;
 color: white; }
.button-royal:active, .button-royal.active, .button-royal.is-active,
.button-royal-flat:active,
.button-royal-flat.active,
.button-royal-flat.is-active {
 background-color: #827ae1;
 border-color: #827ae1;
 color: #5246e2; }


.button-royal2,
.button-royal-flat {
background-color: #4e2866;
border-color: #7b72e9;
color: white;

}


.button-royal2:hover, .button-royal2.hover, .button-royal2.is-active {
background-color: #6f5082;
border-color: #7b72e9;
color: white;

}




.button-royal3,
.button-royal-flat {
background-color: #2a0d45;
border-color: #7b72e9;
color: white;

}


.button-roya3:hover, .button-royal2.hover, .button-royal3.is-active {
background-color: #6f5082;
border-color: #7b72e9;
color: white;

}




















































.button-royal2:visited,
.button-royal2-flat:visited {
 color: white; }
.button-royal2:hover, .button-royal2:focus,
.button-royal2-flat:hover,
.button-royal2-flat:focus {
 background-color: #6f5082;
 border-color: #a49ef0;
 color: white; }
.button-royal2:active, .button-royal2.active, .button-royal2.is-active,
.button-royal2-flat:active,
.button-royal2-flat.active,
.button-royal2-flat.is-active {
 background-color: #6f5082;
 border-color: #827ae1;
 color: #5246e2; }


 #files {
 width: 95px;
 overflow:hidden;
}
iframe {
margin-left: 15px;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

#time {
font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  color: #000;
  margin: -4px;
  background: transparent;

}
</style>

<br><br>


<center><div id="time"></div></center>




<br><br>


  
  
  
  
<center>
  
      
    <output id="list"></output>
<input type="file" id="files" name="files[]" multiple />
<div class="citycountry">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<body>

</div>
       </center>


<br><br>



















<iframe src="https://saucy.chargebeeportal.com/portal/v2/login?forward=portal_main" title="saucy" width="100%" height="600" frameborder="none">
</iframe>




​
<br><br><br><br><br>

​​