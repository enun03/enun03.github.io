var navOutput = document.querySelector('#navbar');

navOutput.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html"><i class="fab fa-empire"></i> ENUN03</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="demos.html">Demos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reference</a>
          </li>
        </ul>
      </div>
    </nav>
`;

window.addEventListener('scroll', ev => {
  var nav = document.querySelector('.navbar');
  if (window.scrollY > navOutput.offsetTop){
    nav.classList.add('fixed-top');
    document.querySelector('.container-fluid').style.marginTop = nav.clientHeight+'px';
  }else{    
    nav.classList.remove('fixed-top');
    document.querySelector('.container-fluid').style.marginTop = '0px';
  }
});

