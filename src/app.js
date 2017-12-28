window.onload = function() {
  addScript('/src/components/header/main.js');
  addScript('/src/components/navbar/main.js');
  addScript('/src/components/sidebar/main.js');
  addScript('/src/components/watching/main.js');  
}

function addScript(src){
  var head = document.head;
  var script = document.createElement('script');
  script.type= 'text/javascript';
  script.src= src;
  head.appendChild(script);
}