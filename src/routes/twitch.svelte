<script>
  

  var x = document.createElement("script");
x.type = "text/javascript";
x.src = "https://player.twitch.tv/js/embed/v1.js";
document.body.appendChild(x);


  var options = {
        width: '100%',
        height: 610,
        layout: "video-with-chat",
        channel: '{{$match->stream}}',
        autoplay: true
        };
        var embed = new Twitch.Embed("player", options);	  
        changeChannel = (chan) => {
        embed.setChannel(chan);
        }
</script><svelte:head><title>Twitch</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Twitch">
<meta name="description" content="Watch Twitch streams of all variety & interact with chat.">
<meta name="keywords" content="watch twitch, twitch stream, twitch, streams, watch streams, twitch variety, variety streams">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  

<center><br><br><br><br><br>
<input type ="text" name='stream' id="stream" class='form-control' value="" style="width: 70%;" >
<button class="btn-modern" id="editStreamBtn" type="button" onClick="changeChannel(document.getElementById('stream').value)"  data-edit-text="Update">Twitch</button></center>
<br>





<style>

input#stream {
line-height: 35px;
    font-size:22px;
  text-indent:5px;
    border: 1px solid #9146FF;


}

input#stream:hover {
    border: 1px solid #9146FF;
}

  
.btn-modern{
  display:inline-block;
  padding:.8rem 1rem;
  border-radius:8px;
  font-weight:900;
  line-height:1;
  cursor:pointer;
  height:40px;
  border:none;
  outline:none;
  background-color:#9146FF;
  color:white;
  font-size:16px;
  appearance:none;
  transition: .5s ease-in;
}
.btn-modern:hover{
  background-color:#9146FF;
}
</style>
