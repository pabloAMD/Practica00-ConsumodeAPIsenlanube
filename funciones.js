
var total = 0;
function CargarDatos(page) {
    var peli = document.getElementById("pelicula").value;
    var detalles = "";

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microssoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            total = data.totalResults;
            data.Search.forEach(pelis => {
                detalles += `<tr><td> <img width='100' height='150'' src=${ pelis.Poster != 'N/A' ? pelis.Poster :"imagen/Nimagen.jpg"}></td>
                <td>${pelis.Title}</td>
                <td>${pelis.Year}</td>
                <td> <a href='#' onclick=\\"CargarInformacion('${pelis.imdbID}')\\">MORE</a></td></tr>`;
                controlpagina();

            });

            document.getElementById("Detalles").innerHTML = detalles;
        }
    }
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=447abae5&s=" + peli + "&plot=full&page="+page, true);
    xmlhttp.send();
}

var index = 3;
function controlpagina() {
    paginac = "<ul class='pagination'><li class='page-item'><a onclick=\"tcambio(-1)\"  class='page-link' href='#'>Previous</a></li>" +
        "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 2) + ")\"  class='page-link' href='#'>" + (index - 2) + "</a></li>" +
        "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 1) + ")\"  class='page-link' href='#'>" + (index - 1) + "</a></li>" +
        "<li class='page-item'><a onclick=\"CargarDatos(" + (index) + ")\"  class='page-link' href='#'>" + (index) + "</a></li>" +
        "<li class='page-item'><a id='siguiente' onclick=\"tcambio(1)\" class='page-link' href='#'>Next</a></li></ul>";
    document.getElementById("paginacion").innerHTML = paginac;
}
var pagic = 30;

function tcambio(num) {
    var n = "";
    if (num == "1") {
        pagic = pagic + 30;
        if (pagic>total) {
            index = index + 3;
            console.log("final de finales",index);
            n = "<ul class='pagination'><li class='page-item '><a onclick=\"tcambio(-1)\" class='page-link' href='#'>Previous</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 2) + "\"  class='page-link' href='#'>" + (index - 2) + "</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 1) + ")\"  class='page-link' href='#'>" + (index - 1) + "</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index) + ")\"  class='page-link' href='#'>" + (index) + "</a></li>" +
            "<li class='page-item disabled'><a id='siguiente'  class='page-link' href='#'>Next</a></li></ul>";
        } else {
            CargarDatos((index+1));
            n += "<ul class='pagination'><li class='page-item'><a onclick=\"tcambio(-1)\" class='page-link' href='#'>Previous</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index+1) + ")\"  class='page-link' href='#'>" + (index+1) + "</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index + 2) + ")\"  class='page-link' href='#'>" + (index + 2) + "</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index + 3) + ")\"  class='page-link' href='#'>" + (index + 3) + "</a></li>" +
                "<li class='page-item'><a onclick=\"tcambio(1)\" class='page-link' href='#'>Next</a></li></ul>";
                index = index + 3;
                console.log("index sumado", index)
        }
    } else {
           
            pagic = pagic - 30;
            console.log("paginas restadas ", pagic)
            
            n += "<ul class='pagination'><li class='page-item'><a onclick=\"tcambio(-1)\"   class='page-link' href='#'>Previous</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 5) + ")\"  class='page-link' href='#'>" + (index - 5) + "</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 4) + ")\"  class='page-link' href='#'>" + (index - 4) + "</a></li>" +
                "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 3) + ")\"  class='page-link' href='#'>" + (index - 3) + "</a></li>" +
                "<li class='page-item'><a id='siguiente' onclick=\"tcambio(1)\" class='page-link' href='#'>Next</a></li></ul>";

            index = index-3;
            console.log("index restado", index)

            if (index==3) {
                console.log("inicio")
                n = "<ul class='pagination'><li class='page-item disabled'><a  class='page-link' href='#'>Previous</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 2) + "\"  class='page-link' href='#'>" + (index - 2) + "</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index - 1) + ")\"  class='page-link' href='#'>" + (index - 1) + "</a></li>" +
            "<li class='page-item'><a onclick=\"CargarDatos(" + (index) + ")\"  class='page-link' href='#'>" + (index) + "</a></li>" +
            "<li class='page-item '><a id='siguiente' onclick=\"tcambio(1)\" class='page-link' href='#'>Next</a></li></ul>";
            }else{
                CargarDatos((index));
            } 
            
        

    }
    document.getElementById("paginacion").innerHTML = n;



}

function CargarInformacion(id) {
    var contenido = "";

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microssoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)

            contenido += "<tr>" +
                "<td> <img width='100' height='150'' src=" + data.Poster + "></td>" +
                "<td>" + data.Title + "</td>" +
                "<td>" + data.Year + "</td>" +
                "<td><dl class='dl-horizontal'>" +
                "<dt>Genero</dt><dd>" + data.Genre + "</dd>" +
                "<dt>Duracion</dt><dd>" + data.Runtime + "</dd>" +
                "<dt>Idiomas</dt><dd>" + data.Language + "</dd>" +
                "<dt>Reparto</dt><dd>" + data.Actors + "</dd>" +
                "<dt>Premios</dt><dd>" + data.Awards + "</dd>" +
                "<dt>Resumen</dt><dd>" + data.Plot + "</dd>" +
                "<dt>Produccion</dt><dd>" + data.Production + "</dd>" +
                "</dl></td>" +
                "</tr>" +
                "<div><a href='#'   onclick=\"CargarDatos()\">Volver</a></div>";

            document.getElementById("Detalles").innerHTML = contenido;
            document.getElementById("paginacion").style.display = "none";
        }
    }
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=447abae5&i=" + id + "&plot=full", true);
    xmlhttp.send();
}