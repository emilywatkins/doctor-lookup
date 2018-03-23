import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from './doctor.js'

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    let promise = getData();
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if (body.data.length === 0) {
        $('#doctor-data').append('This search returned no results');
      }
      for(var i = 0; i < body.data.length; i++) {
        $('#doctor-data').append(
          `<div class="doctors">
          <b>Doctor Name: </b> ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}
          <br>
          </div>`
        );
      }
    }, function(error) {
      $('#doctor-data').text('error');
    });
  });

});
