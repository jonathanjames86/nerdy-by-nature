//change color of background on click
var jumboLogo = document.querySelector('jumbo-logo');


jumboLogo.addEventListner('click', function(){
  this.classList.toggle('black');
}, false);
