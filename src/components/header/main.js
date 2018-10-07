//Header Markup
var header = document.querySelector('.page-header');
header.innerHTML = `
    <!-- Parallax Header -->
    <div id="scene">
      <div data-depth="0.03">
        <img class='img-responsive' src="src/img/space.jpg" style="margin: auto; display: block; width: 100% !important;">
      </div>
      <div data-depth="0.02" style="margin-left: 5%;margin-top: 5%;">
        <h1 id="header-title" style="color:white;">Dev Portfolio: Eli Nunez</h1>
        <h5 id="header-title" style="color:white;"><i class="fab fa-github" style="color:white"></i> enun03 | <i class="fab fa-linkedin" style="color:white"></i> Eli Nunez</h5>
      </div>
    </div><!--. parallax end -->
`;

//CSS Custom Style
var head = document.head;
head.innerHTML += `
    <style>
        body {
          background-color: #fcfcfc;
        }
        @media screen and (max-width: 650px) {
            #header-title{
                font-size:2em !important;
                margin-top: 0px !important;
            }
        }
        @media screen and (max-width: 400px) {
            #header-title{
                font-size:1em !important;
                margin-top: 0px !important;
            }
        }
   </style>
`;

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);