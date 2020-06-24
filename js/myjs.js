$(document).ready(function(){
    $('#bookappointment').modal('show')
  });



  $('#book').click(function(){

    $('#bookappointment').modal('hide');
    $('#bookappointment1').modal('show');
      
  });

  $("input[type='radio']").on('click', function (e) {
     $('#card_Details').css('display','block');

  });


  function onSubmit() {
      event.preventDefault();
    $('#bookappointment1').modal('hide');
    $('#successMessage').modal('show');
  }

  $('#services').click(function(){
      alert("hello");
        $('#services_section').focus();
  });

  
  $('#bookBtn').click(function(){
    $('#bookappointment1').modal('show')
  });