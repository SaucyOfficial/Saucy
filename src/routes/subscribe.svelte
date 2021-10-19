<svelte:head><title>Subscribe</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Subscribe">
<meta name="description" content="Subscribe to Saucy daily, weekly, or monthly for any amount">
<meta name="keywords" content="subscribe, saucy subscribe, daily subscribe, weekly subscribe, monthly subscribe">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  
<br><br><br><br>

<center>
    <div id="subscribebuttons">
    <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="subscribe-daily" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Daily</a>
    <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="subscribe-weekly" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Weekly</a>
    <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="subscribe-monthly" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Monthly</a>
    </div>
    </center>
    
    <style>
    
    #subscribebuttons > a{
        display: inline-block;
    }
    
    #subscribebuttons {
    white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }
    
    .button.instagram {
        display: block;
      width: 120px;
      max-width: 100%;
      margin: 0 auto;
      margin-bottom: 0;
      overflow: hidden;
      position: relative;
      transform: translatez(0);
      text-decoration: none;
      box-sizing: border-box;
      font-size: 22px;
        font-weight: normal;
    font-family: 'Roobert';
         src: url('/files/theme/Roobert.woff2');
    }
    
    .instagram {
        text-align: center;
        border-radius: 15px;
      padding: 25px;
      color: white;
    color:#fff;
        background-image: url('https://media.giphy.com/media/jIC2wcVbWNYz7bDsXw/source.gif');
        background-size: cover;
    }
    
    
    </style>
