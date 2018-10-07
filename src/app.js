var load = function() {
  addScript('/src/components/header/main.js');
  addScript('/src/components/navbar/main.js');
  addScript('/src/components/sidebar/main.js');
  addScript('/src/components/watching/main.js');  
  setTimeout(() => {
    addScript('https://platform.linkedin.com/badges/js/profile.js');
  }, 100);
}()

function addScript(src){
  var head = document.head;
  var script = document.createElement('script');
  script.type= 'text/javascript';
  script.src= src;
  head.appendChild(script);
}
