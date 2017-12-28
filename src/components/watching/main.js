var watchingDOM = document.querySelector('#watching');
var head = document.head;

var Watching = {
  watchingDOM,
  resData: [],
  data: () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        Watching.resData = JSON.parse(this.response);
        // console.log('Enun03 Watching Data');
        // console.log(Watching.resData);
        Watching.render();
      }
    };
    xhr.open("GET", "https://api.github.com/users/enun03/subscriptions", true);
    xhr.send();
  },
  render : () => {
    console.log('Enun03 Watching Data');
    console.log(Watching.resData);
    this.watchingDOM.innerHTML = `<h3>Recent Activity:</h3>`;
    Watching.resData.reverse();
    Watching.resData.forEach( w => {
      this.watchingDOM.innerHTML += `
        <div class="card" style="margin: 0.3em;">
          <div class="card-body">
            <a href="${w.html_url}"><p>${w.name}</p></a>
          </div>
        </div>
      `;
    });
  }
}

Watching.data();

