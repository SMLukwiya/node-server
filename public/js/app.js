console.log('Client side javascript is loaded');

fetch('/weather').then(response => {
  response.json().then()
}).catch(error => {
  console.log(error);
})
