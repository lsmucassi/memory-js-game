 document.addEventListener('DOMContentLoaded', () => {
     //card options
     const cardArray = [
         {
             name: 'fries',
             img: 'images/fries.png'
         },
         {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
     ]

     const grid = document.querySelector('.grid')
     const resultDisplay = document.querySelector('#result')
     var cardChosen = []
     var cardChosenId = []
     var cardWon = []


     //create game board
     function createBoard() {
         for (let i = 0; i < cardArray.length; i++) {
             var card = document.createElement('img')
             card.setAttribute('src', 'images/blank.png')
             card.setAttribute('data-id', i)
             // card.addEventListener('click', flipcard)
             grid.appendChild(card)
         }      
     }

     // check for matches
     function checkForMatch() {
         var cards = document.querySelectorAll('img')
         const optionOneId = cardChosenId[0]
         const optionTwoId = cardChosenId[1]
         if (cardChosen[0] === cardChosen[1]) {
             alert('You found a matching card')
             cards[optionOneId].setAttribute('src', 'images/white.png')
             cards[optionTwoId].setAttribute('src', 'images/white.png')
             cardWon.push(cardChosen)
         } else {
             cards[optionOneId].setAttribute('src', 'images/blank.png')
             cards[optionTwoId].setAttribute('src', 'images/blank.png')
             alert('OOps! sorry, try again')
         }
         cardChosen = []
         cardChosenId = []
         resultDisplay
     }

     // flip card
     function flipcard() {
         var cardId = this.getAttribute('data-id')
         cardChosen.push(cardArray[cardId].name)
         cardChosenId.push(cardId)
         this.setAttribute('src', cardArray[cardId].img)
         if (cardChosenId.length == 2) {
             setTimeout(checkForMatch, 500)
         }
     }

     createBoard()

 })