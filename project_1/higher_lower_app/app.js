// console.log('connected');
// console.log($);

$(() => {
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



const deck = $.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  }).then((data) => {
    console.log(data);

    const draw = () => {
      // ajax request from shuffled deck for 2 cards
      $('.card').remove()
      $.ajax({
        url: `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
      }).then((data) => {
        console.log(data);
        // generate an image element and set source as the first card returned so the user can see it as the current card.
        let $img = $('<img>').addClass('card').attr('src', data.cards[0].image)
        $img.appendTo('.game-screen')
        // generate an amige of a card back. to be toggled to the image of the second card once a button has been clicked.
        let $cardBack = $('<img>').addClass('card').attr('src', 'imgs/card back red.png')
        $cardBack.appendTo('.game-screen')

      })
    }
    // button variables ====================
    const drawBtn = $('#draw')
     // button event listeners =================
     drawBtn.on('click', draw)
  })
}) //onload ends here
