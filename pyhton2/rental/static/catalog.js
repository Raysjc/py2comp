var movies = [];

function getCatalog(){
    $.ajax({
        url: 'http://127.0.0.1:8000/api/movies',
        type: "GET",
        success: function(response){
            console.log("response from server", response);

            movies = response.objects;
            for(var i=0; i< movies.length; i++){
                var movie = movies[i];
                displayMovie(movie, i);
            }
        },
        error: function(errorDetails){
            console.log("Error", errorDetails);
        }   
    })
};

function displayMovie(movie, movie_count){
    // get container
    var container = $("#container");
    var first = "";
    if(movie_count == 0) first = "active";
    // create html syntax
    var indexLayout =
    `<div class="carousel-item ${first}">
            <img src="${movie.image_url}" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${movie.title}</h5>
              <h4>${movie.release_year}</h4>
              <p>${movie.star}</p>
              <p>${movie.genre.name}</p>
            </div>
    </div>`;


    var Indicator=`<li data-target="#carouselExampleCaptions" data-slide-to="${movie_count}" class="${first}"></li>`

    // add syntax to container
    container.append(indexLayout);
    $(".carousel-indicators").append(Indicator)
}

function init(){
    console.log("Catalog JS is loaded");

    getCatalog();
}

window.onload = init;