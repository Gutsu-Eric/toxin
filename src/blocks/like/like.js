import './dependencies.js';
function setLike( jQuery ) {
  $( '.like' ).each(function(index, element) {
    $( element ).find('.like__input').on('click', function(event) {
      event.stopPropagation();
    });
    $( element ).on('click', function(event) {
      const counElement = $( element ).find('.like__count');
      let count = parseInt(counElement.text());
      count = $( element ).hasClass('like_liked_true') ? --count : ++count;
      counElement.text(count);
      $( element ).toggleClass('like_liked_true');
      $( element ).toggleClass('like_liked_false');
    })
  });
}

$( document ).ready( setLike );