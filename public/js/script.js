
var beSuper_i = 0;
var beSuper_Array = ["|", "N", "Ne", "Ner|", "Nerd", "Nerdy", "Nerdy |", "Nerdy", "Nerd", "Ner|", "Ne",
    "N", "", "S|", "Sup", "Supe", "Super |", "Super", "Supe", "Sup|", "S", " ", "Y|", "Yo", "You", "You |",
    "You", "You", "You |", "You", "You", "You|", "Yo", "Y", "|", "", ""];
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
    setTimeout('wssSlide()', 165);
}

function wssSlide() {
    beSuperElem.innerHTML = beSuper_Array[beSuper_i];
    beSuperElem.style.opacity = 1;
    setTimeout('beSuperNext()', 165);
}


function moveRight(x) {
  var modal = document.getElementById(x);
  var maxL = 0+"%";
  if(modal.style.left === maxL){
    modal.style.left = -100+"%";
  } else{
    modal.style.left = maxL;
  }
};

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

function sideDrop(x, w){
  var menu = document.getElementById(x),
  maxW = w+"%";
  if(menu.style.width === maxW){
    menu.style.width = "0px";
  } else{
    menu.style.width = maxW;
  }
};

function genderColor(el){
  var colorChange = document.getElementById('gender-div').children;
  for(var i = 0; i < colorChange.length; i++){
    colorChange[i].className = "color1";
  };
  colorChange[0].className = "gender-selector";
  el.className = "color2";

}

function toggleColor(el){
  var colorChange = document.getElementById('feature-products').children;
  for(var i = 0; i < colorChange.length; i++){
    colorChange[i].className = "color1";
  }
  colorChange[0].className = "feature-title";
  el.className = "color2";
};

function toggleOpacity(el){
  var opacityChange = document.getElementById('feature-content').children;
  for(var i = 0; i < opacityChange.length; i++){
    opacityChange[i].className = "cc-opacity-half";
  }
  el.className = "cc-opacity-full";

};
// function colorChange(x){
//   var changeColor = document.getElementById(x);
//   color = "#9A0000";
//   if (changeColor.style.color === color){
//     changeColor.style.color = #BABABA;
//   } else {
//     changeColor.style.color = color;
//   }S




// window.onclick = function(event){
//   if(!event.target.matches('feature-products')){
//     var feature = document.getElementsById('shirt-color');
//     feature.style.color = "blue";
//   }
// }


// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.feature-products')) {
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
