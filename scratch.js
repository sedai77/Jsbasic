var videos={
    monthly: {
        Movie1: {
            240: 'linktojanuary240.mp4',
            360: 'linktojanuary360.mp4',
            480: 'linktojanuary480.mp4',
            720: 'linktojanuary720.mp4'
        },
        movie2: {
            240: 'linktofebruary240.mp4',
            360: 'linktofebruary360.mp4',
            480: 'linktofebruary480.mp4',
            720: 'linktofebruary720.mp4'
        }
    },
    family: {
        children: {
            240: 'linktochildren240.mp4',
            360: 'linktochildren360.mp4',
            480: 'linktochildren480.mp4',
            720: 'linktochildren720.mp4'
        },
        parent: {
            240: 'linktoparent240.mp4',
            360: 'linktoparent360.mp4',
            480: 'linktoparent480.mp4',
            720: 'linktoparent720.mp4'
        }
    }
}

$( document ).ready(function () {
    console.log("here:;;");
    var shraddha = "";
    $.each(videos, function (key, value) {
        shraddha += "<h3>" + key + "</h3>";
        $.each(value, function (month, file ) {
            shraddha += "<h1>" + month + "</h1>";
            $.each(file, function (size, name) {
                shraddha += '<a href="' + name + '" data-role="button" data-inline="true" data-mini="true">' + size + ' </a>';
            });
        });
    })
    console.log("here 2:"+ shraddha);

    document.getElementById("movies").innerHTML = shraddha;



})





