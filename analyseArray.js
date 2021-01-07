let cards = [
  {
    couleur: 'vert',
    chiffre: '6',
  },
  {
    couleur: 'rouge',
    chiffre: '6',
  },
  {
    couleur: 'bleu',
    chiffre: '9',
  },
  {
    couleur: 'vert',
    chiffre: '9',
  }
]

let choice = {
  couleur: 'rouge',
  chiffre: '6',
}



// cards.forEach(el => {
//   // console.log(el)
//   // console.log(choice)
  
//   // if(el.couleur == choice.couleur && el.chiffre == choice.chiffre) {
//   //   console.log('this')
//   // }
//   if(el.couleur !== choice.couleur && el.chiffre !== choice.chiffre) {
//       newCards.push(el)
//   }
//   console.log('---------')
// })

const removeChosenCardFromCardGame = (cards, choice) => {
  let newCards = []
  let removed = false
  
  for (let i =0; i<cards.length; i++ ){
    if(cards[i].couleur === choice.couleur && cards[i].chiffre === choice.chiffre && !removed) {
      removed = true
    } else {
      newCards.push(cards[i]);
    }
  }
  
  console.log(newCards)
}

removeChosenCardFromCardGame(cards, choice)