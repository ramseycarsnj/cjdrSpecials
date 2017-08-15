$(document).ready(function() {
  $('.info').click(function(){
    $('.vehicleInfo').fadeToggle('slow', function(){

    });
    if (this.innerHTML === 'VEHICLE INFO') {
      this.innerHTML = 'CLOSE INFO';
    } else {
      this.innerHTML = 'VEHICLE INFO';
    }
  });

  $('.info2').click(function(){
    $('.vehicleInfo2').fadeToggle('slow', function(){

    });
    if (this.innerHTML === 'VEHICLE INFO') {
      this.innerHTML = 'CLOSE INFO';
    } else {
      this.innerHTML = 'VEHICLE INFO';
    }
  });

  $('.info3').click(function(){
    $('.vehicleInfo3').fadeToggle('slow', function(){

    });
    if (this.innerHTML === 'VEHICLE INFO') {
      this.innerHTML = 'CLOSE INFO';
    } else {
      this.innerHTML = 'VEHICLE INFO';
    }
  });
});
