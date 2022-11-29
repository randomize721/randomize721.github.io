const apikey = 'ee64305e';

function cardBuilder (movieData) {
    let content = `
        <div class="col-md-3 my-3">
            <div class="card">
                <img src="`+ movieData.Poster +`" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">`+ movieData.Title +` (`+ movieData.Year +`)</h5>
                    <!-- Button trigger modal -->
                    <div class="row justify-content-center">
                        <div class="col-md-10 my-3 text-center">
                            <button type="button" id="btn-movie-detail" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-movie-id="`+ movieData.imdbID +`">
                                See Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return content;
}

function modalBuilder (movieData) {
    let content = `
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <img src="`+ movieData.Poster +`">
            </div>
        </div>
        <div class="text-center my-3">
            Title : `+ movieData.Title +` <br>
            Year : `+ movieData.Year +` <br>
            Rated : `+ movieData.Rated +` <br>
            Released : `+ movieData.Released +` <br>
            Runtime : `+ movieData.Runtime +` <br>
            Genre : `+ movieData.Genre +` <br>
            Director : `+ movieData.Director +` <br>
            Writer : `+ movieData.Writer +` <br>
            <p class="my-3">
            `+ movieData.Plot +`
            </p>
        </div>
    `;

    return content;
}

function searchMovies (search_query) {
    $('#content').html('');
    let content = '';

    $.ajax({
        type: 'get',
        url: 'https://www.omdbapi.com/',
        dataType: 'json',
        data: {
            'apikey' : apikey,
            's' : search_query
        },
        success: (response) => {
            if (response.Response === "True") {
                let movies = response.Search;
                $.each(movies, (i,data) => {
                    content += cardBuilder(data);
                });

            } else {
                content += `<h1 class="text-center">`+ response.Error +`</h1>`;
            }
            $('#content').html(content);
        }
    });
}

function detailMovie (movieID) {
    $('.modal-body').html('');
    let content = '';

    $.ajax({
        type: 'get',
        url: 'https://www.omdbapi.com/',
        dataType: 'json',
        data: {
            'apikey' : apikey,
            'i' : movieID
        },
        success: (response) => {
            if (response.Response === "True") {
                content = modalBuilder(response);
            } else {
                content = `<h1 class="text-center">`+ response.Error +`</h1>`;
            }
            $('.modal-body').html(content);
        }
    });
}

$(document).ready(() => {
    $('form').on('submit', () => {
        return false;
    });
});

$('#btn-search-movie').on('click',() => {

    searchMovies($('#form-search-movie').val());
    $('#form-search-movie').val('');

})

$('#content').on('click', 'button', function () {

    detailMovie($(this).data('movie-id'));

})