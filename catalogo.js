
var moviesList = ['https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg',
    'https://m.media-amazon.com/images/I/91382RVTr3L._AC_UF1000,1000_QL80_.jpg',
    'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?',
    'https://m.media-amazon.com/images/I/91w4beKh6+L._AC_UF1000,1000_QL80_.jpg',
    'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/75/19874043.jpg',
    'https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg'];

moviesList[6] = 'https://viureview.com.br/images/filmes8/Steve-Jobs--o-homem-e-a-maquina.jpg';

for (i = 0; i < moviesList.length; i++) {

    //document.getElementById('movies').innerHTML += '<img src="' + moviesList[i] + '" alt="Movie Image">';

    var img = document.createElement('img');
    img.src = moviesList[i];
    img.alt = 'Movie Image';
    img.classList.add('movie-image', 'movie-' + i); // Adiciona classes movie-image e movie-N (onde N é o índice)
    document.getElementById('movies').appendChild(img);

    
}





