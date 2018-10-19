import { getGhibble } from './ghibble.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#film-form').submit(function (event) {
    event.preventDefault();
    $('#result').text("");
    let filmName = $('#name').val();
    let promise = getGhibble(filmName);
    promise.then(function (response) {
      let body = JSON.parse(response);
      console.log(body);
      
      for (let prop in body[0]) {
        if (prop === 'title' || prop === 'director' || prop == 'description' || prop === 'release_date' || prop === 'producer') {
          $('#result').append(`<b> ${prop.toUpperCase()} :</b> ${body[0][prop]}` + "<br>");
        }   
      }

      
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request : ${error.message}`);
    });

    


  });

});
