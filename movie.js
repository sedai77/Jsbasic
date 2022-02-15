var videos={
  movie1: {
    name: "Movie 1",
    url: "http://www.google.com",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem"
  },
  movie2: {
    name: "Movie 2",
    url: "http://www.google.com",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem"
  },
  movie3: {
    name: "Movie 3",
    url: "#detail.html",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem"
  }
}

$( document ).ready(function () {
  // console.log("dfsdfdsfsd");
  var html = "";

  $.each(videos, function (key, value) {

    html += "<div class=\"movie-image\"> <img src=\"tile.png\" width=\"300px\"> </div>";
    html += "<div class=\"movie-title\"> <h2><button onclick='goToDetailspage(value)'>"+value.name+"</button></h2> </div>";
    html += "<div class=\"movie-desc\"> <p>"+value.desc+"</p> </div>";

    document.getElementById("movie").innerHTML = html;

  })

})

function goToDetailspage(videos) {
  console.log("dfsdfdsfsd"+ videos.title);
  // navigate to new page
  // render html

}

