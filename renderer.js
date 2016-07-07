// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const jquery = require('jquery')
const {clipboard} = require('electron');
let Handlebars = require('handlebars');

window.jquery = jquery;

function searchApi (search_string) {
  search_string = search_string.split(" ").join("+");
  var search_url = "http://api.giphy.com/v1/gifs/search?q=" + search_string + "&api_key=dc6zaTOxFJmzC";
  console.log(search_url);
  var result = jquery.ajax({url: search_url});
  return result;
}

window.searchApi = searchApi;

function alertTest() {
  var search_string = document.getElementById('search-box').value;
  searchApi(search_string).done(function(result) {
    var num_results = Math.min(10, result.data.length)
    document.getElementById('result-area').innerHTML = ""
    for (i = 0; i < num_results; i++) {
      var url = result["data"][i].images.original.url
      document.getElementById('result-area').innerHTML += Handlebars.templates['image.hbs']({url: url});
    }
  });
}

window.alertTest = alertTest;

function alertTestKeyCheck(e) {
  if (e.keyCode == 13) {
    alertTest()
  }
}

window.alertTestKeyCheck = alertTestKeyCheck;

function randomize() {
  randomGif().done(function(result) {
    document.getElementById('result-area').innerHTML = "";
    var url = result["data"].image_url
    document.getElementById('result-area').innerHTML = Handlebars.templates['image.hbs']({url: url});
  });
}

window.randomize = randomize;

function randomGif() {
  var randomEndpoint = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten";
  var result = jquery.ajax({url: randomEndpoint});
  return result;
}

window.randomGif = randomGif

function copyUrlClipboard(url) {
  clipboard.writeText(url);

}

window.copyUrlClipboard = copyUrlClipboard;
