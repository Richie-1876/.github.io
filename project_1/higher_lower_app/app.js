// console.log('connected');
// console.log($);

$(() => {
  // ajax request from shuffled deck for 2 cards
  $.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
  }).then((data) => {
    console.log(data);
    // generate an image element and set source as the first card returned so the user can see it as the current card.
    let $img = $('<img>').addClass('card').attr('src', data.cards[0].image)
    $img.appendTo('.game-screen')
    // generate an amige of a card back. to be toggled to the image of the second card once a button has been clicked.
    let $cardBack = $('<img>').addClass('card').attr('src', 'imgs/card back red.png')
    $cardBack.appendTo('.game-screen')
    // Generate buttons for the game play. one for higher and one for lower. both run the same function to check the cards and return result.
    let $higher = $('<button>Higher?</button>').addClass('button')
    $higher.appendTo('.button-container')
    $('<p>OR</p>').appendTo('.button-container')
    let $lower = $('<button>Lower?</button>').addClass('button')
    $lower.appendTo('.button-container')

  })
}) //onload ends here
