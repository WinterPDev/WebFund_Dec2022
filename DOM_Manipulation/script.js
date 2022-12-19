
// Objects have key value pairs. We get the value by selecting the key.


var pokedex = {
    'Pikachu': {
        'pic': 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/025Pikachu-Gigantamax.png/600px-025Pikachu-Gigantamax.png',
        'name': 'Pikachu',
        'evolution': {
            'pic': 'https://archives.bulbagarden.net/media/upload/thumb/3/3a/026Raichu-Alola.png/600px-026Raichu-Alola.png',
            'name': 'Raichu'
        }
    },
    'Charmeleon': {
        'pic': 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/600px-005Charmeleon.png',
        'name': 'Charmeleon',
        'evolution': {
            'pic': 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/600px-006Charizard.png',
            'name': 'Charizard'
        }
    }
}


console.log(pikachu.evolution.pic)



function evolvePokemon(pokeName, pokeImage, pokemon) {
    // When giving querySelector the tag, use the same syntax as defining CSS classes/ids
    var pdexEntry = pokedex[pokemon]
    var pName = document.querySelector(pokeName)
    var pImage = document.querySelector(pokeImage)

    if (pName.innerText != pokemon) {
        pName.innerText = pdexEntry.name
        pImage.src = pdexEntry.pic
        pImage.alt = pdexEntry.name
    } else {

        pName.innerText = pdexEntry.evolution.name
        pImage.src = pdexEntry.evolution.pic
        pImage.alt = pdexEntry.evolution.name
    }

}

// function evolvePokemon2() {
//     // When giving querySelector the tag, use the same syntax as defining CSS classes/ids
//     var pName = document.querySelector('#pokeName-2')

//     var pImage = document.querySelector('#pokeImage-2')

//     pName.innerText = 'Charizard'

//     pImage.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/600px-006Charizard.png'
//     pImage.alt = 'Charizard'

//     // console.log(element.innerText);
// }
