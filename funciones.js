function CargarDatos() {
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

            data.Search.forEach(pelis => {
                detalles += "<tr>" +
                    "<td> <img width='100' height='150'' src=" + pelis.Poster + "></td>" +
                    "<td>" + pelis.Title + "</td>" +
                    "<td>" + pelis.Year + "</td>" +
                    "<td> <a href='#' onclick=\"CargarInformacion('"+pelis.imdbID+"')\">MORE</a></td>" +
                    "</tr>";

            });
            document.getElementById("Detalles").innerHTML = detalles;
        }
    }
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=447abae5&s=" + peli + "&plot=full", true);
    xmlhttp.send();
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

                    contenido +="<tr>" +
                    "<td> <img width='100' height='150'' src=" + data.Poster + "></td>" +
                    "<td>" + data.Title + "</td>" +
                    "<td>" + data.Year + "</td>" +
                    "<td><dl class='dl-horizontal'>" +
                    "<dt>Genero</dt><dd>"+data.Genre+"</dd>"+
                    "<dt>Duracion</dt><dd>"+data.Runtime+"</dd>"+
                    "<dt>Idiomas</dt><dd>"+data.Language+"</dd>"+
                    "<dt>Reparto</dt><dd>"+data.Actors+"</dd>"+
                    "<dt>Premios</dt><dd>"+data.Awards+"</dd>"+
                    "<dt>Resumen</dt><dd>"+data.Plot+"</dd>"+
                    "<dt>Produccion</dt><dd>"+data.Production+"</dd>"+
                    "</dl></td>"+
                    "</tr>"+
                    "<tr><td> <a href='#' onclick=\"CargarDatos()\">Volver</a></td></tr>";
                    
                   
                        
              


            
            document.getElementById("Detalles").innerHTML = contenido;
        }
    }
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=447abae5&i=" + id + "&plot=full", true);
    xmlhttp.send();
}