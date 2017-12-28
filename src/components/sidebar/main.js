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
        <li class="list-group-item"><i class="fas fa-paperclip"></i> <a href="https://drive.google.com/open?id=0Bw4AXgA6dkEoX1BydEpaRmNKakk" target="_blank">My Resume</a></li>          
        </ul>
      </div>

      <div class="card" style="display: box; margin: 1.2em;">
          <div class="card-header">Short Bio:</div>
          <div class="card-body">
           
          </div>
        </div>
    </div>
    `;
    this.head.innerHTML += `
      <link href="/src/components/sidebar/style.css" rel="stylesheet">
    `;
  }
};

  Sidebar.data();
