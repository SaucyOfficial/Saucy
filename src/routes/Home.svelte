<script>

[...document.getElementsByClassName('accordion-title')].forEach((elms) => {
  elms.addEventListener('click', (e) =>
    e.target.parentNode.classList.toggle('is-open')
  )
})


</script>


<svelte:head><title>Saucy</title> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
  <meta name="title" content="Saucy">
  <meta name="description" content="(Diversity x Infinity)∞">
  <meta name="keywords" content="diversity, infinity">
</svelte:head>














  <center>
<style>
      #saucy {
    color: #fff;
    font-family: Roobert;
       background-image: url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif);
      }

      #subscribe {
    color: #000;
    font-family: Roobert;
       background-image: url(/uploads/gif/rainbow.gif);
       background-repeat:no-repeat;
       background-size: cover;
      }

      #infinitysaucy {
    color: #000;
    font-family: Roobert;
       background-image: url('https://media.giphy.com/media/3oGRFDcTd4EJz4V0Uo/source.gif?cid=790b761161b2815698184c1d409eca9997b9ebcdcabf0c5f&rid=source.gif&ct=g');
       background-repeat:no-repeat;
       background-size: cover;
       background-position: center;
      }



 h1 {
	 margin: 0;
	 line-height: 2;
	 text-align: center;
}

h2, #saucyimage {
  margin: 10px;
  font-family: Roobert;
}


 .row {
	 display: flex;
}
 .row .col {
	 flex: 1;
}
 .row .col:last-child {
	 margin-left: 1em;
}
/* Accordion styles */
 .tabs {
	 border-radius: 8px;
	 overflow: hidden;
	 box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
   margin: 10px;

}
 .tab {
	 width: 100%;
	 color: #2a2a2a;
	 overflow: hidden;
   background : #fff;
}
 .tab-label {
	 display: flex;
	 justify-content: space-between;
	 padding: 1em;
	 background: #fff;
	 cursor: pointer;
   font-family: Roobert;
   font-size: 20px;

	/* Icon */
}
 .tab-label:hover {
	 background: #fff;
}
 .tab-label::after {
	 content: "\276F";
	 width: 1em;
	 height: 1em;
	 text-align: center;
	 transition: all 0.35s;
}
 .tab-content {
	 max-height: 0;
	 padding: 0 1em;
	 color: #2a2a2a;
   font-family: FuturaPT-Light;
	 background: white;
	 transition: all 0.35s;
}
 .tab-close {
	 display: flex;
	 justify-content: flex-end;
	 padding: 1em;
	 font-size: 0.75em;
	 background: #fff;
	 cursor: pointer;
}
 .tab-close:hover {
	 background: #1a252f;
}
 input:checked + .tab-label {
	 background: #fff;
}
 input:checked + .tab-label::after {
	 transform: rotate(90deg);
}
 input:checked ~ .tab-content {
	 max-height: 100vh;
	 padding: 1em;
}
 

      #description {
    color: #000;
    margin: 20px;
    font-family: Roobert;
      }

      #faq {
          background-image: url('/uploads/other/rainbow.jpg');
       background-repeat:no-repeat;
       background-size: cover;
       background-position: center;
      }



 input {
	 position: absolute;
	 opacity: 0;
	 z-index: -1;
 }
 

</style>
<div>
      <div id="saucy">

<br><br><br>
Saucy is the most powerful force in the universe<br>
Everything  & anything imagined can happen here<br>
Never doubt its power, always fear its potential​<br><br></div>

<div id="subscribe">

  <img height="150" alt="saucy" src="/uploads/branding/saucydefault.png">
  <h2>(Diversity x Infinity)∞ <br>
  <h1>Multiverse Metaverse</h1>


<br>


  <div id="subscribebuttons">
  <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-daily" target="_blank" data-cb-type="checkout" data-cb-plan-id="subscribe-daily" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Daily</a>
  <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-weekly" target="_blank" data-cb-type="checkout" data-cb-plan-id="subscribe-weekly" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Weekly</a>
  <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-monthly" target="_blank" data-cb-type="checkout" data-cb-plan-id="subscribe-monthly" data-cb-plan-quantity="1" class="button instagram"><span class="gradient"></span>Monthly</a>
  </div>
  
  <style>
  
  #subscribebuttons > a{
      display: inline-block;
      text-align: center;
  }
  
  #subscribebuttons {
  white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;

  
  }
  
  .button.instagram {
       display: block;
    width: 100px;
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

<p>​*Subscribe daily, weekly, or monthly for any amount above. <a href="https://saucy.chargebeeportal.com/portal/v2/login?forward=portal_main">Cancel anytime</a>​</p>
<br><br>
</div>

<div id="infinitysaucy">

  <img height="100" alt="infinity" src="/uploads/branding/infinity.png">

</div>

</center>

<div id="description">
  <br><br>

Saucy delivers a diverse and infinite radius of values at an exponentially infinite scale. Try searching in the upper right or left. 
​<br>
<br>Things of value are expensive. Choose Saucy.
<br>Zoo : $10/day, Therapy : $70/week, Netflix : $15/month
<br>Any value no matter how crazy, weird, or normal
<br>Entire companies, brands, places, industries, universes
<br>Saucy has all the above + infinity for any price you want
<br>Saucy is the most powerful force in the universe
<br>Saucy is the most valuable multiverse in existence

</div>

<br><br>


<div id="faq">





  <br><br>
  
  
    <img height="50" id="saucyimage" alt="saucy" src="/uploads/branding/saucydefault.png">
  
  
  
  <br><br><br><br>


 

  <br><h2>Basics</h2><br>



     <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">What is Saucy?</label>
        <div class="tab-content">
        Saucy delivers a diverse and infinite radius of values from all categories. The category entertainment at
            Saucy has values like videos, tv, music, and streams. To be saucy means to have a life that flows like 
            sauce, neither rigid in shape nor direction. An infinitely diverse life. Saucy is (Diversity x Infinity)∞ 
            because it delivers ∞ googolplex's of value. Saucy is a multiverse because it can add anything it wants at any time.
           </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">How does it work?</label>
        <div class="tab-content">
          Search values by search term in the upper right, and search values by category in the upper left. 
            Try searching for plants. It is under the category home.
               </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck3">
        <label class="tab-label" for="chck3">Isn't this just the web?</label>
        <div class="tab-content">
          Existing websites ONLY apply to everything under the "moments" category of Saucy. Other parts of Saucy may use embeds or APIs, 
            but do not use iframes.
            <br><br>

            You will notice Saucy has existing websites as part of it. This doesn't mean Saucy is trying to sell the free web
             or be an extra service you have to pay for. It uses existing websites because its utilizing existing resources to do
              everything it can possibly do. ​Remember, the best ideas are always created with existing ones. Saucy is not a 
              search engine, social media, streaming service, healthcare, restaurant, science lab, learning center, travel booking.
               It is all of them & infinitely more. Saucy is Diversity x Infinity.
               <br><br>
   
            Also, remember NFTs. If NFTs (free content on the web) can sell for millions, Saucy can utilize the existing web and 
            you can subscribe for any amount of money daily, weekly, or monthly in the millions 
            and never outrun (Diversity x Infinity)∞ 
            
            <br><br>

            *Disclaimer : Saucy utilizes existing websites & third-party resources. Not always, but often. We are not
             responsible for the content, ads, or anything else shown on these websites as we do not own them. Also in 
             regards to copyright, we do not intend to divert business away from websites & third parties. If anything,
              it helps them grow as part of our vision. Think of it like using a web browser. It is legal & compliant.
       
           </div>
      </div>
    </div>

    


    <br><h2>Urgency</h2><br>



     <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck4">
        <label class="tab-label" for="chck4">Why do I need it?</label>
        <div class="tab-content">
          With Saucy you can experience new things, make more money, protect yourself, feel better, look better, save time, 
            have better relationships, get more social interaction, receive more pleasure, and much more. By not using Saucy,
             you're missing out on getting more value out of your daily life. Saucy provides more value than the entire European 
             and US economies combined.
            ​​<br><br>
             Saucy brings all timelines, realities, perspectives, and possibilities i​nto one online platform. Your favorite music,
              politics discussion, investing in cryptocurrency, supporting causes you care about, creating the content you love,
               visiting places through maps, new foods to try. Saucy can be used for anything and everything.       </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck5">
        <label class="tab-label" for="chck5">Why do people love us?</label>
        <div class="tab-content">
              -speedy & reliable for blazing fast speeds
            <br> -enterprise grade security with full SSL strict
            <br> -proudly supporting LGBTQIA+, BLM, and others
            <br> -pay what you want or use it for free
            <br> -we don't sell your data
            <br> -no advertisements shown
            <br> -your account is your's under your control
            <br> -you are more than a product, you are a person
            <br> -fair customer support to everyone small not just big
            <br> ​-prohibited to troll, bully, or harass on our platform
            <br> -we are always modern & forward-thinking       </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck6">
        <label class="tab-label" for="chck6">Problem we solve?</label>
        <div class="tab-content">
          Solving the world's biggest problem : Lack of (Diversity x Infinity​)∞ 
            <br>  ~Control your reality instead of being trapped in simulations
            <br>  ~Create your own world instead of being a creature of this world
            <br>  ~Craft what you want instead of being demanded what to do
            <br>  ~Consistent wins in all areas of your life instead of constant losses
            <br>  ~Connect to perspectives and strategies instead of relying on your own intelligence
            <br>  ~Create moments that matter instead of meaningless times      </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck7">
        <label class="tab-label" for="chck7">Brands we work with?</label>
        <div class="tab-content">
          You will want to use Saucy simply because of the ∞ collaborations we have with various brands. Some of my personal favorites are Twitch, Fortnite, 100Thieves, Cash App, Hummingbot, TikTok, Reddit, Product Hunt, Mountain Dew, Starbucks, McDonalds, Taco Bell, Rick and Morty, BTS, Ozuna, Dillon Francis, Diplo, Major Lazer, Marshmello, and twenty øne piløts.
                  </div>
      </div>
    </div>



    <br><h2>Trust</h2><br>


    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck8">
        <label class="tab-label" for="chck8">Our security?</label>
        <div class="tab-content">
          <b>Saucy uses Chargebee & Stripe for billing</b><br>
            Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry. To accomplish this, we use the best-in-class security tools and practices to maintain a high level of security at Stripe.
             <br>Chargebee is a PCI-DSS Level 1 Service Provider. Chargebee ensures that your customers’ sensitive card information is encrypted and handled in a safe and secure manner. With annual audits and PCI-DSS Level 1 certification, Chargebee protects sensitive data.
             
             ​​<br><br>
             <b>Saucy uses Cloudflare for the website​</b>
             <br> Full SSL (Strict) 256 Bit Encryption
             <br> SSL (Secure Socket Layer) is the standard security technology for establishing an encrypted link between a web server and a browser. This secure link ensures that all data transferred remains private. It’s also called TLS (Transport Layer Security). Millions of websites use SSL encryption everyday to secure connections and keep their customer’s data safe from monitoring and tampering. Full SSL (strict) ensures a secure connection between both the visitor and your Cloudflare domain and between Cloudflare and your origin web server. Full (strict) support SSL hostname validation against CNAME targets. 
             ​<br><br>
            <b> PCI Compliance</b>
             <br>TLS 1.2 is what the website uses at a bare minimum to be compliant with PCI in order to meet the PCI Data Security Standard (PCI DSS) for safeguarding payment data. Both TLS 1.0 and TLS 1.1 are insufficient for protecting information due to known vulnerabilities. They are insufficient to secure payment card related traffic. 
             <br><br>
             <b>​TLS 1.3</b>
             <br> TLS 1.3 is the newest, fastest, and most secure version of the TLS protocol. SSL/TLS is the protocol that encrypts communication between users and the website. When web traffic is encrypted with TLS, users will see the green padlock in their browser window. Traffic to and from the website will be served over the 1.3 protocol when supported by clients.
             <br><br>
             <b>Authenticated Origin Pulls</b>
             <br> Authenticated Origin Pulls allows for verification that web requests to the origin server have come from Cloudflare. This prevents traffic from bypassing security measures provided by Cloudflare, such as IP and Web Application Firewalls, logging, and encryption. Cloudflare origin-pull servers present a TLS client certificate as part of connections to the origin. Web servers and other infrastructure can be configured to require client certificate authentication for connections.
             <br><br>
             <b>Opportunistic Encryption</b>
             <br> Opportunistic Encryption allows browsers to benefit from the improved performance of HTTP/2 by letting them know that your site is available over an encrypted connection. Browsers will continue to show “http” in the address bar, not “https”.
             <br><br>
            <b> Automatic HTTPS Rewrites</b>
             <br>Automatic HTTPS Rewrites helps fix mixed content by changing “http” to “https” for all resources or links on your web site that can be served with HTTPS.
             <br><br>
            <b> DDOS Protection</b>
             <br>-HTTP FloodPrevents attacks caused from a flood of HTTP requests.
             <br> -UDP FloodPrevents attacks caused from a flood of UDP packets.
             <br> -SYN FloodPrevents attacks caused from a flood of TCP packets sent with SYN flag.
             <br> -ACK FloodPrevents attacks caused from a flood of TCP packets sent with ACK flag.
             <br> -QUIC FloodPrevents attacks caused from a flood of QUIC requests.
             <br><br>
            <b> HSTS</b>
             <br>HTTP Strict Transport Security (HSTS, RFC 6797) is a header which allows a website to specify and enforce security policy in client web browsers. This policy enforcement protects secure websites from downgrade attacks, SSL stripping, and cookie hijacking. It allows a web server to declare a policy that browsers will only connect using secure HTTPS connections, and ensures end users do not “click through” critical security warnings. HSTS is an important security mechanism for high security websites. HSTS headers are only respected when served over HTTPS connections, not HTTP.
             <br><br>
             <b>DNNSEC</b>
             <br>DNNSEC protects against forged DNS answers. DNSSEC protected zones are cryptographically signed to ensure the DNS records received are identical to the DNS records published by the domain owner.
             <br><br>
             
             ​Security Scans for https://www.Saucy.io
             <br> SSL Check
             <br> ​SSL Check 2
             <br> Google Safe Browsing
             <br> ​McAfee Site Advisor        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck9">
        <label class="tab-label" for="chck9">Who created Saucy?</label>
        <div class="tab-content">
          Me. My name is Bryce & I am the CEO and founder of Saucy.
            <br><br>
            Links to my other projects :<br>
            <a href="/saucy-feed">Saucy Feed</a> | <a href="/saucy-products">Saucy Products</a> |
            <a href="/saucy-stories">Saucy Stories</a> | <a href="/saucy-vlogs">Saucy Vlogs</a>
            <br><br>       
            Everything I do is tied to the (Diversity x Infinity)∞ I create.        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck10">
        <label class="tab-label" for="chck10">Everyone is welcome.</label>
        <div class="tab-content">
         Saucy is built with a strong foundation on diversity, which consists of acceptance, open-mindedness, gentleness, 
            and encouragement. We welcome everyone with loving arms, and show positivity through our encouraging words and
             actions. Everyone is welcome, no matter who they are, what their interests are, or what they've been through.
              We believe in the power of community to create a better tomorrow. 
            </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck11">
        <label class="tab-label" for="chck11">Our history?</label>
        <div class="tab-content">
        Saucy started as Saucy Saturday on June 26, 2009 creating inspirational/entertaining YouTube videos.
            While at Baldwin Wallace University in Berea, OH in 2014 I became a Patreon creator. 
            And in 2016, started creating Instagram stories. In 2016-2017 I learned everything about business (self-taught)
             and created Saucy. At first Saucy was a community based on Diversity, Positivity, and Love. Then it turned into 
             a bunch of other things to the point it got psycho and crazy. Saucy went through thousands and thousands of landing
              pages and changes. There have been millions of challenges and issues on all fronts with Saucy. But we made it. 
              Saucy is (Diversity x Infinity)∞. You can learn more about our history <a href="/history-of-saucy">here</a> .
            </div>
      </div>
    </div>

    <br><h2>Subscribing</h2><br>


        <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck12">
          <label class="tab-label" for="chck12">How to subscribe?</label>
          <div class="tab-content">
          1. Subscribe <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-daily">Daily</a> | 
              <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-weekly">Weekly</a> |
              <a href="https://saucy.chargebee.com/hosted_pages/plans/subscribe-daily">Monthly</a> 
             <br> 2. Choose your quantity (in $5 increments)
              <br> 3. Click "Enter my Email" & enter your email
              <br> 4. Add payment details and click "Next"
              <br> 5. Click "Subscribe" and you're done!
              <br><br>
              *Your subscription will start immediately. <a href="https://saucy.chargebeeportal.com/portal/v2/login?forward=portal_main">Cancel anytime</a>        </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck14">
          <label class="tab-label" for="chck14">Average subscription?</label>
          <div class="tab-content">
     There is no right or wrong answer. There have been subscriptions for $1,000 month & $5/month. Subscribe for an amount that feels right to you
                   </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck15">
          <label class="tab-label" for="chck15">Why subscribe?</label>
          <div class="tab-content">
            Things of value are only tiny fractions of categories & are expensive<br><br>

              Animals -> Zoo : $10/day
              Health -> Therapy : $70/week
              Entertainment -> Netflix : $15/month
              
                 

                   <br><br>

                   Saucy is one pay what you want subscription to all values from all categories.
                  <br>-Entertainment is only 1 of 39 available categories at Saucy
                 <br> -Values : books, gifs, memes, music, photos, radio, stream, tier lists, tv, twitch, videos


                    </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck16">
          <label class="tab-label" for="chck16">How to cancel?</label>
          <div class="tab-content">
            Manage subscriptions through the Saucy Chargebee portal <a href="https://saucy.chargebeeportal.com/portal/v2/login?forward=portal_main">here</a>
          </div>
        </div>
      </div>


      <br><h2>(Diversity x Infinity)∞ </h2><br>
<div class="tabs">
  <div class="tab">
    <input type="checkbox" id="chck17">
    <label class="tab-label" for="chck17">Saucy to da moon.</label>
    <div class="tab-content">
    -If Facebook can have 2.70 billion users and falsely disable accounts, misuse data, and manipulate people. We can get above that user count while doing everything right and ethical. 

      <br><br> -If NFTs (free content on the web) can sell for millions, Saucy can utilize the existing web and you can subscribe for any amount of money monthly in the millions and never outrun Diversity x Infinity
      
      <br><br> -If Twitch streamers can react to memes and get paid thousands of dollars an hour by viewers, Saucy can easily outrun this rate of all content creators in the world combined.
      
      <br><br> -If artwork that could seem meaningless to most people can be valued by a collector, anyone can value Saucy for any amount they dream in their imagination.
      
      <br><br> -If cryptocurrencies can go up 1,000% to 1,000,000% in a single day or week (I see it happen all the time), so can we. Our growth potential is unlimited since Saucy has all the energy in the universe.
      ​
      <br><br> -If companies who don't even do a fraction of what we do are worth multi billions, Saucy as a brand is worth the googolplex 10(10^100).
      
      <br><br> Saucy to da moon. It's bigger than Dogecoin, Bitcoin, Tesla, Facebook, Google, and Amazon combined. This IS the greatest thing to ever exist. Be part of the SaucyFam and subscribe!

    </div>
  </div>
  <div class="tab">
    <input type="checkbox" id="chck18">
    <label class="tab-label" for="chck18">Innovations.</label>
    <div class="tab-content">
      
        Fortnite. Saucy is directly invested in Fortnite and we may be involved in the zero point and The Imagined Order.  Is Saucy more powerful than the Zero Point? The zero point flips through countless realities per second. The cosmetics, seasons, and so much more are fascinating as well.

        <br><br> Superheroes. Is Saucy going to be in Marvel and DC comics? Should superheroes fear the power of Saucy, the greatest force in the universe? Thanos, Superman, Batman, the Hulk, Iron Man, Galactus, Aquaman, Wolverine, Spiderman, Thor, and more all fear the power of Saucy.
        
        <br><br> Twitch. Ah, streamers. Artists and content creators are the new jobs. Jobs are an old philosophy that should be done away with. Same with colleges, you don't need a degree to make millions being a creator. Saucy loves the Twitch platform.
        
        <br><br> Product Hunt. Saucy is connected to Product Hunt to bring you the latest and greatest innovations all the time which come in  daily at all times of the day, ensuring you can have a truly innovative experience.
        
        <br><br> Cryptocurrency. De-Fi, yield farming, NFTs, and all the crazy craze. Saucy will be so much bigger than the currently most hyped up thing, but I have to admit, crypto is a great innovation. 
        
        <br><br>  Simulations.  Do we live in a simulation and do parallel universes exist? Different timelines and perspectives. Reality bending and intelligent shifting. Saucy will always be scientifically giving you all of this.
        
        <br><br>  Outer Space. Is Saucy out of this world? Will it change the way we see the entirety of energy, information, time, space, matter, and the physical laws and constants that describe them? Will the aliens want to use it? It is inevitable. 
        ​  </div>
  </div>
<br><br><br><br><br><br><br><br>
</div>
</div>
