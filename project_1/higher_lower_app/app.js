// console.log('connected');
// console.log($);
// variable to record correct answers
let correct = 0
// variable to record wrong answers
let wrong = 0
// global empty array to hold card in play
let cardsInPlay = []
// variable to hold deck id returned when pack requested.
let deck_id =


$(() => {

  // create score board =====================

  let $userScore = $('<p>').attr("id","user-score").text(`Correct: ${correct}`).appendTo(".scores")

  let $computerScore = $('<p>').attr("id","computer-score").text(`Wrong: ${wrong}`).appendTo('.scores')

  // modal variables =====================
  // open button variable
  const $openBtn = $('#openModal');
  // Modal variable
  const $modal = $('#modal');
  // close button variable
  const $closeBtn = $('#close');



  // modal event handlers =================

  // function to switch css property to display block
  const openModal = () => {
    $modal.css('display', 'block');
  }

  // function to switch css property to display none.
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  // modal event listeners =================

  // click function for open button - open the modal.
  $openBtn.on('click', openModal);
  // click function for close button - close the modal
  $closeBtn.on('click', closeModal);

  // set modal to open automatically when page loads.
  setTimeout(openModal, 2000)


  // request for deck of cards ==========================
  const deck = $.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  }).then((data) => {
    console.log(data);
    deck_id = data.deck_id

  })

  // function to draw two cards from the deck =======================

  const draw = () => {
    // ajax request from shuffled deck for 2 cards
    // check if cards in play array is empty to allow new cards to be drawn.
    if (cardsInPlay.length === 0) {

      // remove previous cards from the dom.
      $('.card').remove()
      $.ajax({
        url: `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
      }).then((drawData) => {
        console.log(drawData);
        // dictionary to change string value to integer
        const cardToNumber = {
          "KING": 13,
          "QUEEN": 12,
          "JACK": 11,
          "10": 10,
          "9": 9,
          "8": 8,
          "7": 7,
          "6": 6,
          "5": 5,
          "4": 4,
          "3": 3,
          "2": 2,
          "ACE": 1
        }
        // convert value  to cardToNumber
        drawData.cards[0].value = cardToNumber[drawData.cards[0].value]
        drawData.cards[1].value = cardToNumber[drawData.cards[1].value]
        // add the drawn cards to the cards in play array
        cardsInPlay.push(drawData.cards[0])
        cardsInPlay.push(drawData.cards[1])

        // generate an image element and set source as the first card returned so the user can see it as the current card.

        let $img = $('<img>').addClass('card').attr('src', drawData.cards[0].image)
        $img.appendTo('.game-screen')
        // generate an image of a card back. to be toggled to the image of the second card once a button has been clicked.
        let $cardBack = $('<img>').addClass('card hidden-card').attr('src', 'imgs/card back red.png')
        $cardBack.appendTo('.game-screen')

      })
    }
  }
  // button variables ====================
  const higherBtn = $('#higher')
  const lowerBtn = $('#lower')

  // Game functionality ====================================

  // check if higher function ==============================
  const checkIfHigher = () => {
    $('.hidden-card').attr('src', cardsInPlay[1].image)
    if (cardsInPlay[0].value < cardsInPlay[1].value) {
      console.log('You won');
      correct++;
      $('#user-score').text(`Correct: ${correct}`);
      cardsInPlay.pop()
      cardsInPlay.pop()
      checkWin()
      // console.log(cardsInPlay);




    } else if (cardsInPlay[0].value > cardsInPlay[1].value) {
      console.log('You lost');
      wrong++;
      $('#computer-score').text(`Wrong: ${wrong}`);
      cardsInPlay.pop()
      cardsInPlay.pop()
      checkWin()
      // console.log(cardsInPlay);


    } else {
      console.log('Draw');
      cardsInPlay.pop()
      cardsInPlay.pop()
    }
  }

  // check if lower function ==============================
  const checkIfLower = () => {
    $('.hidden-card').attr('src', cardsInPlay[1].image)
    if (cardsInPlay[0].value > cardsInPlay[1].value) {
      console.log('You won');
      correct++;
      $('#user-score').text(`Correct: ${correct}`);
      cardsInPlay.pop()
      cardsInPlay.pop()
      checkWin()
    } else if (cardsInPlay[0].value < cardsInPlay[1].value) {
      console.log('You lost');
      wrong++;
      $('#computer-score').text(`Wrong: ${wrong}`);
      cardsInPlay.pop()
      cardsInPlay.pop()
      checkWin()
    } else {
      console.log('Draw');
      cardsInPlay.pop()
      cardsInPlay.pop()
    }
  }

  // check win condition function ===============================
  const checkWin = () => {
    if(correct === 5) {
      $('<p>').text('You Win!!!!!!').appendTo('.scores')
      console.log('You win');
    } else if (wrong === 5) {
      $('<p>').text('You Lose!!!!!!').appendTo('.scores')
      console.log('You lose');
    }
  }






  // button variables ====================
  const drawBtn = $('#draw')

  // button event listeners =================
  // button to draw the next pair of cards
  drawBtn.on('click', draw)
  // button to check if the current card is higher than the hidden card
  higherBtn.on('click', checkIfHigher)
  // button to check if the current card is lower than the hidden card
  lowerBtn.on('click', checkIfLower)

}) //onload ends here
