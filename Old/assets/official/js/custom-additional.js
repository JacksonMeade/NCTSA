function wipe_up(elem, height, color) {
    elem.css('background', color);
    elem.css('height', '0px');
    elem.css("top", height);
    elem.animate({
        height: height,
        top: '0px'
    }, 500, function() {
        finishOff(color)
    });
}

function wipe_down(elem, height, color) {
    elem.css('background', color);
    elem.css('height', '0px');
    elem.css("bottom", height);
    elem.animate({
        height: height,
        top: '0px'
    }, 500, function() {
        finishOff(color)
    });
}

function finishOff(colorChoice) {
    $('#navground-colorizer').css('background', colorChoice);
    $('#navground-changer').css('height', '0px');
    $('.section_4 .navbar-toggleable-sm').removeClass('blue');
    $('.section_4 .navbar-toggleable-sm').removeClass('red');
    $('.section_4 .navbar-toggleable-sm').removeClass('grey');
    $('.section_4 .navbar-toggleable-sm').removeClass('black');
    $('.section_4 .navbar-toggleable-sm').removeClass('white');
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
        case ('rgb(13,13,13)'):
            $('.section_4 .navbar-toggleable-sm').addClass('black');
            break;
        case ('rgb(255,255,255)'):
            $('.section_4 .navbar-toggleable-sm').addClass('white');
            break;
    }
}

function visit(linkName) {
    window.open(linkName, '_self');
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        document.getElementById("navvy").style.top = "0";
    } else {
        document.getElementById("navvy").style.top = "-9rem";
    }

}

$(document).ready(function() {
    var $horizontal = $('#horizontalScroll');
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
        $(document).scrollsnap({
            snaps: '.snap',
            proximity: 400,
            latency: 50,
            duration: 400,
            easing: 'swing'
        });
    } else {
        $(document).scrollsnap({
            snaps: '.snap',
            proximity: 700,
            latency: 50,
            duration: 400,
            easing: 'swing'
        });
    }
    var lastScrollTop = 0;
    var scrollDist = 0;
    var colorVals = ['default'];
    $('.vertical > .item-row').each(function() {
        if ($(this).hasClass('nav-red')) {
            colorVals.push('rgb(104,0,0)');
        } else if ($(this).hasClass('nav-blue')) {
            colorVals.push('#052768');
        } else if ($(this).hasClass('nav-grey')) {
            colorVals.push('rgb(128,128,128)');
        }
        if ($(this).hasClass('nav-black')) {
            colorVals.push('rgb(13,13,13)');
        }
        if ($(this).hasClass('nav-white')) {
            colorVals.push('rgb(255,255,255)');
        }
    });
    console.log(colorVals);
    $(window).scroll(function() {
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

        var c = (s / h);
        var position = 0;

        var st = $(this).scrollTop();
        var d = Math.round(c);
        //console.log(d);
        if (scrollDist != d &&
            !isMobile) {
            scrollDist = d;
            if (colorVals[scrollDist] != undefined) {
                if (st == 0) {
                    wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
                } else if (st > lastScrollTop) {
                    wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
                } else {
                    wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), colorVals[scrollDist]);
                }
            } else {
                if (st == 0) {
                    wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                } else if (st > lastScrollTop) {
                    wipe_up($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                } else {
                    wipe_down($('#navground-changer'), $('#navground-colorizer').css('height'), '#052768');
                }
            }
            lastScrollTop = st;
        }

        if (w <= 798) {
            position = (c * w) - c;
        } else {
            position = c * (w / 2);
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
    } else {
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

    setTimeout(function() {
        hamburgerness();
    }, 50);
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
    } else {
        searchy.click();
    }
}

function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

scrollFunction();
