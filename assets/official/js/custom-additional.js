
doElsCollide = function(el1, el2) {
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

    return !((el1.offsetBottom < el2.offsetTop) ||
             (el1.offsetTop > el2.offsetBottom) ||
             (el1.offsetRight < el2.offsetLeft) ||
             (el1.offsetLeft > el2.offsetRight))
};

function wipe_up (elem, height, color) {
        elem.css('background', color);
        elem.css('height', '0px');
        elem.css("top", height);
        elem.animate({
            height: height,
            top: '0px'
        }, 500, function(){finishOff(color)});
    }
    function wipe_down (elem, height, color) {
            elem.css('background', color);
            elem.css('height', '0px');
            elem.css("bottom", height);
            elem.animate({
                height: height,
                top: '0px'
            }, 500, function(){finishOff(color)});
        }

    function finishOff(colorChoice) {
    $('#navground-colorizer').css('background', colorChoice);
    }

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

$(document).ready(function () {
    var $horizontal = $('#horizontalScroll');
var lastScrollTop= 0;
    $(window).scroll(function () {
        /*var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width()/2 - $horizontal.width()/2));
        $horizontal.css({
            'left': -position*/

            var s = $(this).scrollTop(),
            h = $(this).height(),
            w = $(this).width();

            var st = $(this).scrollTop();
              var redNavs = document.getElementsByClassName("redNav");
              for (var i=0; i<redNavs.length; i++) {
                if (doElsCollide(redNavs[i], document.getElementById("navvy")) && document.getElementById('navground-colorizer').style.background != "rgb(104,0,0)") {
                  if (st > lastScrollTop) {
                      wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), 'rgb(104,0,0)');
                  }
                  else {
                      wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), 'rgb(104,0,0)');
                  }
                          console.log('called red');
                }
              }
              var blueNavs = document.getElementsByClassName("blueNav");
              for (var j=0; j<blueNavs.length; j++) {
                if (doElsCollide(blueNavs[j], document.getElementById("navvy")) && document.getElementById('navground-colorizer').style.background != "#052768") {
                  if (st > lastScrollTop) {
                      wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                  }
                  else {
                      wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                  }
                          console.log('called blue');
                }
              }
                lastScrollTop = st;

            var c = (s/h);
            var position = 0;

            if (w <= 798) {
            position = (c * w) - c;
            }
            else {
            position = c * (w/2);
            }

            console.log("s is " + s + ", h is " + h + ", w is " + w + ", c is " + c + ", and position is " + position + ".")
            $horizontal.css({
              'left': -position
        });
    });
});

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
  var form = document.getElementById("searchForm");

  bar.classList.remove("col-md-12");
  bar.classList.add("col-md-4");
  bar.classList.remove("openedSesame");

  fade(form);

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
var form = document.getElementById("searchForm");
var bar = document.getElementById("navvy");
var searchy = document.getElementById("searchBtn");
var navbarCollapse = document.getElementById("navbarSupportedContent");

if (searchGlass.classList.contains("navbar-toggler-right")) {

if (navbarCollapse.classList.contains("show")) {
hamburger.click();
}
bar.classList.remove("col-md-4");
bar.classList.add("col-md-12");
bar.classList.add("openedSesame");

unfade(form);

searchGlass.classList.remove("navbar-toggler-right");
document.getElementById("search-end").appendChild(searchGlass);

hamburger.setAttribute("onclick", "javascript:closeSearch()");
  hamburger.setAttribute("data-toggle", "");
}
else {
  searchy.click();
}
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element) {
var op = 0.1;  // initial opacity
element.style.display = 'block';
var timer = setInterval(function () {
    if (op >= 1){
        clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
}, 10);
}

scrollFunction();
