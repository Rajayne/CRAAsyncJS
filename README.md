# CRA Async JS

## Part 1: Click to Draw Card

Build an app that displays a deck of cards, one card at a time.

1. At page load, create new deck and show button that draws a card.
2. Every clock, display a new card until there are no cards left in the deck.
3. If there are no cards remaining, an alert should appear with the text “Error: no cards remaining!”.

> Do not focus on CSS at all.

## Part 2: Shuffle The Deck

Add a button that will shuffle the deck to start drawing from a full deck without refreshing the page.

1. Make a call to the cards api to shuffle the existing deck.
2. The button should not be clickable while the shuffle is in progress.
3. The shuffle should remove all of the cards from the screen.

## Further Study

Style app and change the behavior so that clicking on the draw card button will draw one card every second.

1. These draws will continue until you press the button again, or until the deck has been exhausted (at which point the alert message from Part 1 should appear).
2. Change the button text appropriately i.e. it could toggle between “Start drawing” and “Stop drawing.”

> Investigate the useRef hook to manage a setInterval call.
