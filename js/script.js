const cards = [
  {
    name: 'Sylveon',
    image:
      'https://conteudo.imguol.com.br/c/entretenimento/82/2021/05/25/sylveon-pokemon-go-1621965223285_v2_450x337.png',
    attributes: {
      ataque: 60000,
      defesa: 65000,
      agilidade: 6.5
    }
  },

  {
    name: 'Garchomp ',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/445_f2.png',
    attributes: {
      ataque: 75000,
      defesa: 95000,
      agilidade: 7
    }
  },

  {
    name: 'Cubone',
    image: 'https://criticalhits.com.br/wp-content/uploads/2020/02/cubone.jpg',
    attributes: {
      ataque: 15000,
      defesa: 125000,
      agilidade: 10
    }
  },

  {
    name: 'Bulbasauro',
    image:
      'https://www.pngitem.com/pimgs/m/130-1306788_bulbasaur-pokemon-png-transparent-png.png',
    attributes: {
      ataque: 7000,
      defesa: 2000,
      agilidade: 50
    }
  },

  {
    name: 'Charizard',
    image:
      'https://3.bp.blogspot.com/-lfuJuZ4ex00/VxTxWdXNBgI/AAAAAAAAC7Q/OytAhcw5yrweTI8cDNNZ1gNrp6gaFsZTgCLcB/s1600/Red_Charizard_PO.png',
    attributes: {
      ataque: 15000,
      defesa: 7000,
      agilidade: 3
    }
  },

  {
    name: 'Squirtle',
    image:
      'http://pm1.narvii.com/6469/998d41f18910f73cbe69fe0b6c5974be96845326_00.jpg',
    attributes: {
      ataque: 7000,
      defesa: 6000,
      agilidade: 5
    }
  },

  {
    name: 'Lucario',
    image:
      'https://mestrepokemon.com/wp-content/uploads/2019/11/Pok%C3%A9mon-Lucario-Pok%C3%A9dex.jpg',
    attributes: {
      ataque: 9000,
      defesa: 4000,
      agilidade: 10
    }
  },
  {
    name: 'Blaziken',
    image: 'https://cdn2.bulbagarden.net/upload/f/f0/Harrison_Blaziken.png',
    attributes: {
      ataque: 120000,
      defesa: 70000,
      agilidade: 8
    }
  },
  {
    name: 'Muk',
    image:
      'https://preview.free3d.com/img/2016/11/2188236052248921162/znofxuri-900.jpg',
    attributes: {
      ataque: 105000,
      defesa: 75000,
      agilidade: 5
    }
  }
]

let machineCard //caso precise usar
let playerCard

function drawCard() {
  let numberMachineCard = parseInt(Math.random() * 9)
  machineCard = cards[numberMachineCard]

  let numberPlayerCard = parseInt(Math.random() * 9)

  while (numberMachineCard === numberPlayerCard) {
    cards.splice(cards.indexOf(numberMachineCard), 1)
    numberPlayerCard = parseInt(Math.random() * 9)
  }

  playerCard = cards[numberPlayerCard]
  console.log(playerCard)

  document.querySelector('#btnDraw').disabled = true
  document.querySelector('#btnPlay').disabled = false

  showPlayerCard()
}

function getAttributeSelected() {
  const radioAttribute = document.getElementsByName('attribute')

  for (let i = 0; i < radioAttribute.length; i++) {
    if (radioAttribute[i].checked === true) {
      return radioAttribute[i].value
    }
  }
}

function play() {
  const attributeSelected = getAttributeSelected()
  const result = document.querySelector('#result')
  const valuePlayerCard = playerCard.attributes[attributeSelected]
  const valueMachineCard = machineCard.attributes[attributeSelected]

  if (valuePlayerCard === valueMachineCard) {
    result.innerHTML += `<p class="final-result">Empate!</p>`
  } else if (valuePlayerCard > valueMachineCard) {
    result.innerHTML += `<p class="final-result">Congratulations, você venceu o jogo!</p>`
  } else {
    result.innerHTML += `<p class="final-result">Game over, a carta da máquina é maior!</p>`
  }
  document.querySelector('#btnPlay').disabled = true
  showMachineCard()
}

function showPlayerCard() {
  const divPlayerCard = document.querySelector('#player-card')
  divPlayerCard.style.backgroundImage = `url(${playerCard.image})`
  const frame = `<img
  src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
  style="width: inherit; height: inherit; position: absolute;"/>`

  const tagHTml = `<div id="options" class="status-card">`

  let textOptions = ''

  for (let attribute in playerCard.attributes) {
    textOptions += `<input type="radio" name="attribute" value=${attribute}> ${attribute}:  ${playerCard.attributes[attribute]} <br>`
  }

  const names = `<p class="subtitle-card">${playerCard.name}</p>`

  divPlayerCard.innerHTML += frame + names + tagHTml + textOptions + '</div>'
}

function showMachineCard() {
  const divMachineCard = document.querySelector('#machine-card')
  divMachineCard.style.backgroundImage = `url(${machineCard.image})`

  const frame = `<img
  src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
  style="width: inherit; height: inherit; position: absolute;"/>` //conferir

  const tagHTml = `<div id="options" class="status-card">`

  let textOptions = ''

  for (let attribute in machineCard.attributes) {
    textOptions += `<p name="attribute" class="m-card" value=${attribute}> ${attribute}:  ${machineCard.attributes[attribute]}</p> `
  }

  const names = `<p class="subtitle-card">${machineCard.name}</p>`

  divMachineCard.innerHTML += frame + names + tagHTml + textOptions + '</div>'
}
