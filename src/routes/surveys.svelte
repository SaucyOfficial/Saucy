<script>
  


  var x = document.createElement("script");
x.type = "text/javascript";
x.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
document.body.appendChild(x);


  var x = document.createElement("script");
x.type = "text/javascript";
x.src = "https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js";
document.body.appendChild(x);

  var pollfishConfig = {
  api_key: "870f75c6-4ce7-4950-b2f6-19b2d1a29667",
  debug: false,
    offerwall: true,
  indicator_position: "TOP_LEFT",
  ready: pollfishReady
};

function pollfishReady(){
Pollfish.showIndicator();
}
</script><svelte:head><title>Surveys</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Surveys">
<meta name="description" content="Surveys you can take to support Saucy.">
<meta name="keywords" content="surveys, survey">
<link rel="manifest" href="/manifest.json">

</svelte:head>


