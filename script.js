let lastPlay = {
  couleur: 'bleu',
  chiffre: '6',
}

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


// 👉 fonction création d'une carte
const cardCreation = (element, index) => {
  let newCard = document.createElement('div')
  let span = document.createElement('span')

  let content = document.createTextNode(element.chiffre)

  span.appendChild(content)
  newCard.appendChild(span)
  if(typeof index === 'number') {
    newCard.setAttribute('index', index)
  }

  newCard.classList.add(element.couleur)
  newCard.classList.add('value' + element.chiffre)
  return newCard
}


// 👉 affichez vos différentes cartes avec leurs couleur et valeur
cards.forEach((element, index) => {
  card = cardCreation(element, index)
  document.getElementById('cards-game').appendChild(card)
})

// 👉 Affichez la dernière carte jouée de la pioche.
document.getElementById('card-stack').appendChild(cardCreation(lastPlay))

// 👉 Lister les cartes jouables et ajouter une bordure pour les identifier
const getPlayableCards = () => {
  // console.log('cards ===', cards)
  let lastColor = lastPlay.couleur
  let lastNumber = lastPlay.chiffre
  let cardsChoice = [];

  document.querySelectorAll('#cards-game > div').forEach(element => {
    element.classList.remove('playable')
    if (element.classList.contains(lastColor) || element.classList.contains('value' + lastNumber)) {
      cardsChoice.push(element)
      element.classList.add('playable')
    }
  })
  // console.log('cardsChoice == ', cardsChoice)
  return cardsChoice;
}

getPlayableCards()


// 👉 écoute sur le clic de vos cartes pour sélectionner la carte à jouer.
const listen = (playableCards) => {
  console.log('playableCards == ',playableCards)
  playableCards.forEach(element => {
    element.addEventListener('click', (e) => {
      let chosenCard = cards[element.getAttribute('index')]
      // console.log('chosenCard == ', chosenCard)

      // 👉 mise à jour du tableau cards en supprimant la carte cliquée
      cards = returnCardsArrayWithoutChosenCard(cards, chosenCard)
      // console.log('new cards == ', cards)

      // 👉 supprime l'ancienne carte de la pile
      document.querySelector('#card-stack > div').remove()
      
      // 👉 afficher la carte choisie dans la pile
      document.getElementById('card-stack').appendChild(cardCreation(chosenCard))
      lastPlay = chosenCard
      // console.log('lastPlay', lastPlay)
      // 👉 retirer la carte de votre jeu
      element.remove()
      
      // 👉 mise à jour des cartes jouables
      getPlayableCards()
      element.removeEventListener('click')
      listen(document.querySelectorAll('.playable'))
    })
  });
}
listen(document.querySelectorAll('.playable'))

// Retourne le tableau des cartes disponibles en ôtant la carte choisie
const returnCardsArrayWithoutChosenCard = (cards, choice) => {
  let newCards = []
  let removed = false
  
  for (let i =0; i<cards.length; i++ ){
    if(cards[i].couleur === choice.couleur && cards[i].chiffre === choice.chiffre && !removed) {
      removed = true
      newCards.push({}); // permet de maintenir les bonnes valeurs d'index
    } else {
      newCards.push(cards[i]);
    }
  }
  // console.log(newCards)
  return newCards
}
