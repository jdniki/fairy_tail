/*global Modernizr */

$(document).ready(function() {
  $('.hover').bind('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
  });

  $(".navbar .nav a[href='"+window.location.pathname+"']").parent('li').addClass('active');

  // $(".affixed").affix();

var noIcon = 'icon-remove',
yesIcon = 'icon-ok';


  if (!Modernizr.csstransitions) {
    $('.csstransitionsMessage').show();

    $('.csstransitions_fp i').addClass(noIcon);
  } else {
    $('.csstransitions_fp i').addClass(yesIcon);
  }
  if (!Modernizr.csstransforms) {
    $('.csstransformsMessage').show();

    $('.csstransforms_fp i').addClass(noIcon);
  } else {
    $('.csstransforms_fp i').addClass(yesIcon);
  }
  if (!Modernizr.csstransforms3d) {
    $('.css3dtransformsMessage').show();

    $('.csstransforms3d_fp i').addClass(noIcon);
  } else {
    $('.csstransforms3d_fp i').addClass(yesIcon);
  }
  if (!Modernizr.cssanimations) {
    $('.cssanimationsMessage').show();

    $('.cssanimations_fp i').addClass(noIcon);
  } else {
    $('.cssanimations_fp i').addClass(yesIcon);
  }
  if (!Modernizr.cssfilters) {
    $('.cssfiltersMessage').show();

    $('.cssfilters_fp i').addClass(noIcon);
  } else {
    $('.cssfilters_fp i').addClass(yesIcon);
  }
});
