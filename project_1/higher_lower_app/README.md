# Higher and Lower app.

The Higher or lower app is a card game where 2 cards are drawn from a shuffled deck. The user will see one card face and one card back. They must decide if they think the hidden cards value is higher or lower and click the corresponding button. They will receive a point in the correct counter for a correct answer. And a point in the wrong counter for a wrong answer. They will win the game if they reach the win condition with correct answers before wrong answers. Here is a link to the live site (https://richie-1876.github.io/project_1/higher_lower_app/#)

## Technologies used.

1. HTML used to build the structure of the page.
2. CSS to add styling. Designed for mobile first and @media added to accommodate wider desktop screens. Images for card table background and card back sourced from google image search.
3. Javascript used to create game functionality.
4. jQuery used to populate the Dom as game progresses with the images of the cards.
5. Ajax request made to request a shuffled deck from (https://deckofcardsapi.com/) and then on click of the draw button another request made to draw two cards from the top of the deck. Another function to reset also makes a request to shuffle the deck again. This is so that the user can use the same deck multiple times.

## Approach Taken

I first created a very simple structure in Html and added small elements of css to give me an idea of the layout I was looking for.

I used jQuery, Javascript, css and html to create a modal which would automatically appear after 2 seconds to explain the rules. This can be exited using the close button and re opened at any time with the about the game button.

I then created an ajax request for a shuffled deck. Once I had successfully done this I could create a function that would draw two cards from the deck on the click of the draw button using another api request with the deck_id and a new param for two cards. I added an if statement to check that the global cardsInPlay array was empty to ensure the user couldn't have a hand of more than two cards.

I used jQuery to append the card images to the Dom putting a card back image in as a place holder for the hidden card. When either higher or lower button is clicked it would append the card image for the hidden card to the Dom in place of the card back.

For the game functionality I used javascript to create functions to check if higher or if lower depending on the button pressed. Because the api returned the card value as a string I created a dictionary object to mutate the value to an int so I could use the higher/lower than operators for the check.

I created a global array so I could push the cards in play into it and empty it when the hand was finished.

I added the score element updating a global variable and appending it to the score div.

I added a win condition check to the game buttons so when the win/loss condition is met it would append a message to the screen.

## Technical Issues

I had to change the data returned from the api in the value key from a string to an int to allow me to use the less than/greater than operators.

I also had some strange behaviour after the first hand had been played where it would check all previous hands as well as the current one. I fixed this by creating a global empty array that I could push the cards in play into and clear after the check has been carried out.

## Unsolved problems

I can't figure out how to keep the header visible when the screen is resized.

Currently the user can continue to play once the win condition is met. I have created a reset button which allows the user to start again but I would like this not to be something they need to do but rather happen automatically after the game.

## Improvements I would make

I would like to make the code run more dynamically by not mutating the value. I would instead create a function to handle this and handle the special cards like ace, jack, queen and king.

I had attempted to have the draw button in the game screen and have it appear like a deck of cards. I could make it work giving the button a background image however when the screen was re-sized it would cut off some of the image. I would like to revisit this as I believe it would help the aesthetics of the app and user experience.

I would like to create another modal that pops up to confirm if they have won or lost after the win condition is met. I would then set the close button on this modal to both close the modal and reset the scores and shuffle the deck.
