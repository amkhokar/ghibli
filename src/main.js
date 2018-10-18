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
      for (let i = 0; i < body.length; i++) {
        for (let prop in body[i]) {
          if (prop === 'title' || prop === 'description') {
            $('#result').append("<b>" + prop.toUpperCase() + "</b> : " + body[i][prop] + "<br>");
          }
        }
      }
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request : ${error.message}`);
    });


  });

});
