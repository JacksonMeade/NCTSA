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
    $('.section_4 .navbar-toggleable-sm').removeClass('blue');
    $('.section_4 .navbar-toggleable-sm').removeClass('red');
    $('.section_4 .navbar-toggleable-sm').removeClass('grey');
    $('.section_4 .navbar-toggleable-sm').removeClass('black');
      switch (colorChoice) {
        case ('#052768'):
              $('.section_4 .navbar-toggleable-sm').addClass('blue');
        break;
        case ('rgb(104,0,0)'):
              $('.section_4 .navbar-toggleable-sm').addClass('red');
        break;
        case ('rgb(128,128,128)'):
              $('.section_4 .navbar-toggleable-sm').addClass('grey')
        break;
        case ('rgb(13,13,13,1)'):
              $('.section_4 .navbar-toggleable-sm').addClass('black');
        break;
      }
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
var scrollDist = 0;
var colorVals = ['default'];
    $('.vertical > .item-row').each(function() {
      if ($(this).hasClass('nav-red')) {
        colorVals.push('rgb(104,0,0)');
      }
      else if ($(this).hasClass('nav-blue')) {
        colorVals.push('#052768');
      }
      else if ($(this).hasClass('nav-grey')) {
        colorVals.push('rgb(128,128,128)');
      }
      if ($(this).hasClass('nav-black')) {
        colorVals.push('rgb(13,13,13)');
      }
    });
    console.log(colorVals);
    $(window).scroll(function () {
        /*var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width()/2 - $horizontal.width()/2));
        $horizontal.css({
            'left': -position*/


            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
            document.getElementById('toggleButton').click();
            $('navground-changer').css('height', '0px');
            }

            var s = $(this).scrollTop(),
            h = $(this).height(),
            w = $(this).width();

            var c = (s/h);
            var position = 0;

            var st = $(this).scrollTop();
            var d = Math.floor(c);
            //console.log(d);
            if (scrollDist != d) {
              scrollDist = d;
              if (colorVals[scrollDist] != undefined) {
              if (st == 0) {
                wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
              }
              else if (st > lastScrollTop) {
                wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
              }
              else {
                wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
              }
              }
              else {
                if (st == 0) {
                  wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                }
                else if (st > lastScrollTop) {
                  wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                }
                else {
                  wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                }
              }
              lastScrollTop = st;
            }

            if (w <= 798) {
            position = (c * w) - c;
            }
            else {
            position = c * (w/2);
            }

            //console.log("s is " + s + ", h is " + h + ", w is " + w + ", c is " + c + ", and position is " + position + ".")
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
