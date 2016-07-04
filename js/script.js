//change color of background on click
// var jumboLogo = document.querySelector('jumbo-logo');
//
//
// jumboLogo.addEventListner('click', function(){
//   this.classList.toggle('black');
// }, false);


function menuDrop(x, h) {
    var menu = document.getElementById(x),
        navarrow = document.getElementById('navarrow'),
        maxH = h+"vh";
    if (menu.style.height === maxH) {
        menu.style.height = "0px";
        navarrow.innerHTML = "&#9662;";
    } else {
        menu.style.height = maxH;
        navarrow.innerHTML = "&#9652";
    }
};




var beSuper_i = 0;
var beSuper_Array = [" |", "N", "Ne", "Ner|", "Nerd", "Nerdy", "Nerdy|", "Nerdy", "Nerd", "Ner|", "Ne",
    "N", "", "S|", "Sup", "Supe", "Super|", "Super", "Supe", "Sup|", "S", " ", "Y|", "Yo", "You", "You|",
    "You", "You", "You|", "You", "You", "You|", "Yo", "Y", "|", "", ""];
// var beSuperElem = document.getElementById("besuper");
var beSuperElem;
window.onload = function() {
    beSuperElem = document.getElementById("besuper");
    wssSlide();
};

function beSuperNext() {
    beSuper_i++;
    beSuperElem.style.opacity = .9;
    if (beSuper_i > (beSuper_Array.length - 1)) {
        beSuper_i = 0;
    }
    setTimeout('wssSlide()', 195);
}

function wssSlide() {
    beSuperElem.innerHTML = beSuper_Array[beSuper_i];
    beSuperElem.style.opacity = 1;
    setTimeout('beSuperNext()', 195);
}




// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.search-filter')) {
//
//     var dropdowns = document.getElementsByClassName("filter-dropdown");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };
