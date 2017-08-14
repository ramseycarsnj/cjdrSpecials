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
});
