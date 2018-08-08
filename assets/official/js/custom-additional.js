function visit(linkName) {
  window.open(linkName, '_self');
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
  document.getElementById("navvy").style.top = "0";
} else {
  document.getElementById("navvy").style.top = "-9rem";
}
}

function bkgd(link) {
if (link == "Default") {
  document.getElementById("Main").style.backgroundImage = "url('assets/images/Balcony-NCTSA_Blurred_Bluescale_Medium_Vignette.png')";
}
else {
  //alert(link);
var output = "url('" + link + "')";
//  alert(output);
document.getElementById("Main").style.backgroundImage = output;
}
}



function closeSearch() {
  var hamburger = document.getElementById("toggleButton");
  var searchGlass = document.getElementById("glassy");
  var bar = document.getElementById("navvy");

  bar.classList.remove("col-md-12");
  bar.classList.add("col-md-4");
  bar.classList.remove("openedSesame");



  searchGlass.classList.add("navbar-toggler-right");
  bar.appendChild(searchGlass);
  bar.removeAttribute('opened');

  setTimeout(function() {hamburgerness();},50);
}


function hamburgerness() {
    var hamburger = document.getElementById("toggleButton");
    hamburger.removeAttribute("onclick");
    hamburger.setAttribute("data-toggle", "collapse");
};


function srchBar() {
var hamburger = document.getElementById("toggleButton");
var searchGlass = document.getElementById("glassy");
var bar = document.getElementById("navvy");

if (searchGlass.classList.contains("navbar-toggler-right")) {
bar.classList.remove("col-md-4");
bar.classList.add("col-md-12");
bar.classList.add("openedSesame");



searchGlass.classList.remove("navbar-toggler-right");
document.getElementById("search-end").appendChild(searchGlass);

hamburger.setAttribute("onclick", "javascript:closeSearch()");
  hamburger.setAttribute("data-toggle", "");
}

}
