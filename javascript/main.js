//1. Grab the input values

//1.1 for the button
document.querySelector(".js-go").addEventListener("click", function () {
  var input = document.querySelector("input").value;
  console.log(input);
  //pushToDOM(input);
  processData(input);
});

//1.2 for the enter button
document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  var input = document.querySelector("input").value;
  //showing result only after clicking the enter
  if (e.which === 13) {
    //pushToDOM(input);
    console.log(input);
    processData(input);
  }
});

/* 2. do the data stuff with the API */
function processData(keyword){

    var container = document.querySelector(".js-container");
    container.innerHTML="";

var url ='https://api.giphy.com/v1/gifs/search?api_key=Tb3eCdxVOcRZgsebfNRnA3HvFtOgHcHI&q='+keyword+'&limit=500&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open("GET", url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load", function (e) {
  var data = e.target.response;
  pushToDOM(data);
});
}

//3. Show the GIFs
function pushToDOM(input) {
  var response = JSON.parse(input);
  var imageURLs = response.data;//[3].images.fixed_height.url;

  //Grabing the div tag inside which we want to display the images
  var container = document.querySelector(".js-container");

  imageURLs.forEach(function(image){
    var src=image.images.fixed_height.url;
    console.log(src);
    container.innerHTML += '<img src="' + src + '" class="container-image">';
  });
}
