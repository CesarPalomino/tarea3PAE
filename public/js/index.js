const HTTTPMethods = {
    "get": "GET",
}
const APIURL = window.location.protocol + '//' + window.location.host + '/api';


function sendHTTPRequest(urlAPI, data, method, cbOK, cbError, authToken) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar:  PUT actualizar archivo
    xhr.open(method, urlAPI);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (authToken)
        xhr.setRequestHeader('x-auth-user', authToken);
    // 4. Enviar solicitud al servidor
    xhr.send(data);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200 && xhr.status != 201) { // analizar el estatus de la respuesta HTTP 
            // Ocurrió un error
            cbError(xhr.status + ': ' + xhr.statusText);
        } else {
            //console.log(xhr.responseText); // Significa que fue exitoso
            cbOK({
                status: xhr.status,
                data: xhr.responseText
            });
        }
    };
}

const perroToHTML = (perro) => {
    return `
    <div class="card">
          <div class="card-body">
            <row>
              <img class="card-img-top" src="https://fotografias.lasexta.com/clipping/cmsimages01/2017/02/07/364CAAAC-A60E-43BB-8FED-05AA0B8F3AF9/58.jpg" style="width: 20%; height: 20%;"></i>>
              <div>
                <h5 class="card-title">Name: ${perro.animalname}</h5>
                <p class="card-text">id: ${perro.id}</p>
                <p class="card-text">breed: ${perro.breedname}</p>
                <p class="card-text">specie: ${perro.speciesname}</p>
                <p class="card-text">age: ${perro.animalage}</p>
                <p class="card-text">color: ${perro.basecolour}</p>
                <p class="card-text">owner: ${perro.adoption?perro.adoption:"no tiene"}</p>
              </div>
            </row>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>
    `
}

const perroListToHTML = (list, id) => {
    if (id && list && document.getElementById(id)) {
        document.getElementById(id).innerHTML = list.map(perroToHTML).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sendHTTPRequest(APIURL,undefined,HTTTPMethods.get,(okay) => {
        console.log(JSON.parse(okay.data));
        perroListToHTML(JSON.parse(okay.data),"animales");
    }), (error) => {
        console.log(error);
    },undefined
});