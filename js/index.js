var searchValue;

function requestWiki() {
  $.getJSON("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchValue, function(data) {
    //var searchValue = data[0];
    var arrTitle = data[1];
    var arrDescription = data[2];
    var arrLinks = data[3];
    var htmlResult = "";
    arrTitle.forEach(function(item, i) {
      htmlResult =  htmlResult + '<a href="' + arrLinks[i] + '" target="_blank">' +"<li>" + "<h4>" + arrTitle[i] + "</h4>" + "<div>" + arrDescription[i] + "</div>" + "</li>" + "</a>" 
    })
    $("#searchResult").html(htmlResult);
  })  
}

$(document).ready(function(){
  $("#submit").on("click", function() {
    searchValue = document.getElementById("searchInput").value;
    requestWiki();  
  })
  $("#searchInput").keypress(function(e){
    if (e.which == 13){
        $("#submit").click();
    }
});
  
  
})