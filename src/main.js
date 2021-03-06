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
        let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`;
        for(var j = 0; j < body.data[i].practices.length; j++) {
          let newPatients = body.data[i].practices[j].accepts_new_patients;
          let practiceName = body.data[i].practices[j].name;
          let practiceStreet = body.data[i].practices[j].visit_address.street;
          let practiceCity = body.data[i].practices[j].visit_address.city;
          let practiceState = body.data[i].practices[j].visit_address.state;
          let practiceZip = body.data[i].practices[j].visit_address.zip;
          let practicePhone = body.data[i].practices[j].phones[0].number;
          let practiceWebsite = body.data[i].practices[j].website;

          $('#doctor-data').append(
            `<div id="practice">${name}<br>
            Practice: ${practiceName}<br>
            Accepting new patients? ${newPatients}<br>
            ${practiceStreet}<br>
            ${practiceCity}, ${practiceState} ${practiceZip}<br>
            ${practicePhone}<br>
            Website: ${practiceWebsite}<br><br>
            </div>`
          );
        }
      }

    }, function(error) {
      $('#doctor-data').text('error');
    });
  });

});
