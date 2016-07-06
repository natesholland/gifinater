// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const jquery = require('jquery')
window.jquery = jquery;

function searchApi (search_string) {
  search_string = search_string.split(" ").join("+");
  var search_url = "http://api.giphy.com/v1/gifs/search?q=" + search_string + "&api_key=dc6zaTOxFJmzC";
  console.log(search_url);
  var result = jquery.ajax({url: search_url, success: function(result){ return result;}});
  return result;
}
window.searchApi = searchApi;

function alertTest() {
  var search_string = document.getElementById('search-box').value;
  var result = searchApi(search_string);
  document.getElementById('result-area').innerHTML = result.status;
}

window.alertTest = alertTest;
