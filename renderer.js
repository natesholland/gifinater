// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const jquery = require('jquery')
const {clipboard} = require('electron');
let Handlebars = require('handlebars');
window.jquery = jquery;

var remote = require('electron').remote

var arguments = remote.getGlobal('sharedObject').prop1;

function setUpFromArgs(arguments){
  arguments.shift()
  if (arguments[0] == '.') {
    arguments.shift()
  }
  search_string = arguments.join(' ')
  document.getElementById('search-box').value=search_string
  doSearch(search_string)
}

setUpFromArgs(arguments)

function searchApi (search_string) {
  search_string = search_string.split(" ").join("+");
  var search_url = "http://api.giphy.com/v1/gifs/search?q=" + search_string + "&api_key=dc6zaTOxFJmzC";
  console.log(search_url);
  var result = jquery.ajax({url: search_url});
  return result;
}

window.searchApi = searchApi;

function updateSearch() {
  var search_string = document.getElementById('search-box').value;
  doSearch(search_string)
}

window.updateSearch = updateSearch;

function doSearch(search_string) {
  searchApi(search_string).done(function(result) {
    var num_results = Math.min(10, result.data.length)
    document.getElementById('result-area').innerHTML = ""
    for (i = 0; i < num_results; i++) {
      var url = result["data"][i].images.original.url
      var still_url = result["data"][i].images.original_still.url
      if (i > 0 && i % 3 == 0) {
        document.getElementById('result-area').innerHTML += "</div><div class=\"row\">"
      }
      id = Math.random().toString(36).substring(7)
      document.getElementById('result-area').innerHTML += Handlebars.templates['image.hbs']({url: url, id: id, still_url: still_url});
    }
  });
}

window.doSearch = doSearch;

function updateSearchKeyCheck(e) {
  if (e.keyCode == 13) {
    updateSearch()
  }
}

window.updateSearchKeyCheck = updateSearchKeyCheck;

function randomize() {
  randomGif().done(function(result) {
    document.getElementById('result-area').innerHTML = "";
    var url = result["data"].image_url
    id = Math.random().toString(36).substring(7)
    document.getElementById('result-area').innerHTML = Handlebars.templates['image.hbs']({url: url, id: id, still_url: url});
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

function onHoverShowGif(element_id, url) {
  jquery(document.getElementById(element_id)).attr('src', url)
}

window.onHoverShowGif = onHoverShowGif;
