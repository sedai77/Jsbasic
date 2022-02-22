var videos={
  movie1: {
    name: "COCO",
    image:"coco.jpg",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem",
    rating: "Rating "+[4.5]

  },
  movie2: {
    name: "TANGLED",
    image:"tangled.jpg",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem",
    rating:"Rating "+[4.2]
  },
  movie3: {
    name: "FROZEN",
    image:"frozen.jpg",
    title: "title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa, cumque dolorem",
    rating:"Rating "+[4.8]

  }
}

$( document ).ready(function () {
  
 var html = "";

  $.each(videos, function (_key, value) {
    html += "<div id='movie'>"
    html += "<div class=\"movie-image\"> <img src=\""+value.image+"\"> </div>";
    html += "<div class=\"movie-title\"> <h2><button onclick='goToDetailspage(value)'>"+value.name+"</button></h2> </div>";
    html += "<div class=\"movie-desc\"> <p>"+value.desc+"</p> </div>";
    html += "<div class=\"rating\"> "+value.rating+"</div>"
    html += "</div>"
  
  })
  document.getElementById("movies").innerHTML = html;

})

function goToDetailspage(videos) {
  window.location.href="newpage.html";
  console.log(videos.name+""+videos.image); 


  // console.log(goToDetailspage);



}


// $( document ).ready(function () {
//   // console.log("dfsdfdsfsd");
//   var newpage = "";

// //  $.each(videos, function (_key, value) {
//     newpage += "<div id='moviedetails'>"
//     newpage += "<div class=\"movie-title\"> <h2><button onclick='goToDetailspage(value)'>"+value.name+"</button></h2> </div>";
//     newpage += "<div class=\"movie-image\"> <img src=\""+value.image+"\"> </div>";
//     newpage += "<div class=\"movie-desc\"> <p>"+value.desc+"</p> </div>";
//     newpage += "</div>"
  
//   })
//   document.getElementById("moviedetails").innerHTML = newpage;

// // })-->


  // navigate to new page
  // render html


