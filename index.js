function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

//

//

//

function moveToSelected(element) {
  if (element == 'next') {
    var selected = $('.selected').next();
  } else if (element == 'prev') {
    var selected = $('.selected').prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass('selected');
  // .removeClass().
  $(prev).removeClass().addClass('prev');
  $(next).removeClass().addClass('next');
  //nextRightSecond
  // prevLeftSecond;
  $(nextSecond).removeClass().addClass('nextRightSecond');
  $(prevSecond).removeClass().addClass('prevLeftSecond');
  // ;hideLeft;
  $(nextSecond).nextAll().removeClass().addClass('hideRight');

  $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected('prev');
      break;

    case 39: // right
      moveToSelected('next');
      break;

    default:
      return;
  }
  e.preventDefault();
});

$('#carousel .common').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});

//
//
//
//
$('b').each(function () {
  $(this).mouseover(function () {
    $(this).addClass('c');
    $('a').children('b').not('c').addClass('b');
  });
  $(this).mouseleave(function () {
    $(this).removeClass('c');
    $('a').children('.b').not('.c').removeClass('b');
  });
});
//
//
// js for top up btn
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);
// to display links having no value
const linkvar = document.querySelectorAll('a');
for (let i = 0; i < linkvar.length; i++) {
  if (linkvar[i].getAttribute('href') === '#') {
    linkvar[i].style.display = 'none';
  }
}

const branch = document.querySelectorAll('.our_team_indi div');
const short = document.querySelectorAll('.our_team_indi h2 span');

for (let k = 0; k < branch.length; k++) {
  if (!branch[k].classList.contains('our_teams_indi_links_conatainer')) {
    branch[k].style.height = '60px';
  }
}
for (let k = 0; k < short.length; k++) {
  short[k].textContent = '';
}
