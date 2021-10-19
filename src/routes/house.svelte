<svelte:head><title>Home</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Home">
<meta name="description" content="Your homepage for Saucy. Your favorite links, saved.">
<meta name="keywords" content="home, homepage">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  
<input type="text" class="textbox" id="nuevo" placeholder="New URL" /> 
<button type="button" class="boton" id="añadir"> + </button>

<select class="textbox" id="select"></select>
<button type="button" class="boton" id="eliminar"> <span class="borrar">x</span> </button>
<div  id='marco'><div id="iframes" /></div>

<style>


iframe {
  border: none;
  width: 100%;
  height: 2000px;
}


#nuevo {
  width: 25%;
}


.textbox{  margin-top: 0px;
  margin-left: 1px;
  height: 10px;
  border-color: floralwhite;
  padding: 10px;
  font-size: 15px;}
.boton{height: 100%;
  background: transparent;
  font-size: 15px;
  border: 1px solid transparent;
}

#select{  border: none;
  height: 40px;
}
</style>

<script>
    $(function(){
	localStorage.str1 = localStorage.str1
    ||'[""]';

  var urls = JSON.parse(localStorage.str1);

  function mostrar(urls) {
    var i, iframes="", seleccion="";
    for (i=0;  i < urls.length;  ++i) {
      iframes += "<div class='url'>"  + "<iframe src='" + urls[i] + "' id="+i+"></iframe></div>";
	  seleccion += "<option value="+i+">"+urls[i]+"</option>";
    }
    $('#iframes').html(iframes);
	$('#select').html(seleccion);
  };

  $("#añadir").on('click', function(){
	urls = JSON.parse(localStorage.str1);
	var nueva = $('#nuevo').val();
	if( nueva.lastIndexOf("https://", 0) !== 0){
	nueva = "https://" + nueva;
    }
    urls.push(nueva);
    mostrar(urls);
	localStorage.str1 = JSON.stringify(urls);
  });

  $("#eliminar").on('click',function(){
	  urls = JSON.parse(localStorage.str1);
	  urls.splice($('#select').val(),1);
	  mostrar(urls);
	  localStorage.str1 = JSON.stringify(urls);
	  });
  mostrar(urls);
});
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js"></script>

