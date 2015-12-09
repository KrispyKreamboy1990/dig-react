/* globals $ */

function scrollToHash(hash) {
  hash = hash.replace(/#/,'');
  var anchor = $('a[name="'+hash+'"]');
  scrollToElement(anchor);
}

function scrollToTop() {
  $('html,body').animate( { scrollTop: 0 }, {duration: 'fast' } );
}

function scrollToElement(e, offset) {
  offset = offset || 0;
  $('html,body').animate(
      { scrollTop: $(e).offset().top - offset },
      { duration: 'slow', 
        easing: 'swing'
      }
    );
}

function scrollIntoView(e, offset) {
  if( !isElementOnScreen(e) ) {
    scrollToElement(e, offset );
  }
}

function isElementOnScreen(e)
{
    var $e = $(e);
    var $w = $(window);

    var docViewTop = $w.scrollTop();
    var docViewBottom = docViewTop + document.body.clientHeight;

    var eTop = $e.offset().top;

    return eTop > docViewTop && eTop < docViewBottom;
}

module.exports = {
  scrollToHash,
  scrollToTop,
  scrollToElement,
  scrollIntoView,
  isElementOnScreen,
};