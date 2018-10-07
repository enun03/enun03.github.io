//Sidebar Component Object
var sidebarDOM = document.querySelector('#sidebar');
var head = document.head;

var Sidebar = {
  sidebarDOM,
  head,
  gitUser: {},
  data: () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        Sidebar.gitUser = JSON.parse(this.response);
        console.log('Enun03 User Data');        
        console.log(Sidebar.gitUser);
        Sidebar.render();
      }
    };
    xhr.open("GET", "https://api.github.com/users/enun03", true);
    xhr.send();
  },
  //Render Sidebar
  render : () => {
    this.sidebarDOM.innerHTML = `
      <!-- Sidebar Card -->
      <div class="card">
      <img class="card-img-top" src="${Sidebar.gitUser.avatar_url}" alt="Card image cap">
      <div class="card-body">
        <h5><center>${Sidebar.gitUser.name}</center></h5>
        <ul class="list-group">
        <li class="list-group-item"><i class="fas fa-map-marker-alt"></i> ${Sidebar.gitUser.location}, US</li>
        <li class="list-group-item"><i class="fas fa-paperclip"></i> <a href="src/docs/EliNunez_Resume.pdf" target="_blank">My Resume</a></li>          
        </ul>
      </div>

      <div class="card" style="display: box; margin: 1.2em;">
          <div class="card-header">Short Bio:</div>
          <div class="card-body">
           <p>I'm a full stack developer with 4 years of experience currently working for DXC.Technology as a programmer analyst. I'm really into JavaScript and some of my favorite technologies are Node.JS, VUE JS and React JS. Also, I really like to collaborate in public GitHub reposotories and I'm currently looking into the MERN stack and GoLang.</p>
          </div>
        </div>
      </div>

      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="eli-nunez-69b761172" id="LinkedInBadge"><a class="LI-simple-link" href='https://pr.linkedin.com/in/eli-nunez-69b761172?trk=profile-badge'>Eli Nunez</a></div>
    `;
    this.head.innerHTML += `
      <link href="/src/components/sidebar/style.css" rel="stylesheet">
    `;
  }
};

Sidebar.data();
