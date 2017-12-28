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
    var output = '';

    Watching.resData.reverse();
    console.log('Enun03 Watching Data');
    console.log(Watching.resData);

    this.watchingDOM.innerHTML = `<h3 style="margin-top:0.35em;">Recent Activity:</h3>`;
    
    Watching.resData.forEach( (w, i) => {
      if(isEven(i) === true) output += `<div class="row">`;
      output += `
        <div class="col-md-6">
          <div class="card" style="margin: 0.2em;">
            <div class="card-body">
              <a href="${w.html_url}"><p>${w.name}</p></a>
              <p style="font-size: 12px;">last update: ${new Date(w.updated_at).toDateString()}</p>
            </div>
          </div>
        </div>
      `;
      debugger;
      if(i !== 0 && isOdd(i) === true) output += `</div>`;
    });
    output += `</div>`;
    console.log(output);
    this.watchingDOM.innerHTML += output;
  }
}

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

Watching.data();

