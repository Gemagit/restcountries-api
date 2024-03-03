const cardTemplate = function (data) { //teniamos una funcion creada que tiene como parámtro los datos de un objeto y devuelve el texto en una tarjeta creada en html
  return `<div class="card">
              <img id="${data.flags.png}" src="${data.flags.png}" alt="flag" />
              <h1 class="center">${data.name.official}</h1>
            </div>`; //pinto las cards accediendo a los datos del array de objetos y a sus propiedades
};
//accedemos a las countries y le asignamos una variable
const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')//hago un fetch con la url para hacer la solicitud a la API
  .then(function (response) {
    return response.json();//después convierte la respuesta en formato json
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
  })
  .then(function (countries) {
    let cards = ""; //en esta variable almaceno las tarjetas de los paises
    countries.forEach(country => { //itero sobre cada pais para luego ir pintando las tarjetas de cada uno
      // 1 - We will need to iterate the countries variable with a loop
      console.log(countries);
      cards += cardTemplate(country);//uso la función de cardTemplate
      // 2 - You can use the cardTemplate() function to create a div with a class card already styled
      // 💡 you can use countriesNode variable to add elements
    });
    countriesNode.innerHTML +=cards;///Añadir al DOM EL RESULTADO, le agregamos a las tarjetas la función creada al principio con la info que pintaremos en el DOM
    // Here is where you'll need to add into the DOM all the countries received from API 
  });

  

