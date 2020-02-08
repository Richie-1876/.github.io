// console.log('connected');
// console.log($);

$(() => {
  $.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
  }).then((data) => {
    console.log(data);
    let $img = $('<img>').addClass('card').attr('src', data.cards[0].image)
    $img.appendTo('.game-screen')

  })
}) //onload ends here
