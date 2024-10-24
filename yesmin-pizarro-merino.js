// Prueba Técnica: Manejo de Objetos y Arreglos con Pokémon
// Nombre: Yesmin Pizarro

// Se define el arreglo de entrenadores

const entrenadores = [
  {
      nombre: "Entrenador 1",
      equipo: [
          { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
          { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
          { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
          { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
          { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
          { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
      ]
  },
  {
      nombre: "Entrenador 2",
      equipo: [
          { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
          { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
          { nombre: "Meganium", nivel: 33, tipo: "Planta" },
          { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
          { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
          { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
      ]
  },
  {
      nombre: "Entrenador 3",
      equipo: [
          { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
          { nombre: "Swampert", nivel: 37, tipo: "Agua" },
          { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
          { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
          { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
          { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
      ]
  },
  {
      nombre: "Entrenador 4",
      equipo: [
          { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
          { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
          { nombre: "Torterra", nivel: 44, tipo: "Planta" },
          { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
          { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
          { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
      ]
  },
  {
      nombre: "Entrenador 5",
      equipo: [
          { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
          { nombre: "Samurott", nivel: 49, tipo: "Agua" },
          { nombre: "Serperior", nivel: 50, tipo: "Planta" },
          { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
          { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
          { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
      ]
  }
];


// Desafío 1: Pokemon con Mayor y Menor Nivel

const minMaxPokemon = (trainerArray) => {

  let allPokemons = []

  trainerArray.forEach((trainer) => {
    trainer.equipo.forEach((trainer) => allPokemons.push(trainer))
  })
  
  const orderPokemons =  allPokemons.sort((a, b) => {
    if (a.nivel > b.nivel) {
      return 1
    }
    if (a.nivel < b.nivel) {
      return -1
    }
    return 0
  })

  const minLevel = orderPokemons[0]
  const maxLevel = orderPokemons[orderPokemons.length-1]

  console.log('Pokemon de menor y mayor nivel', {minLevel, maxLevel})
  return {minLevel, maxLevel}

}

minMaxPokemon(entrenadores)

// Desafío 2: Buscador

const findPokemon = (pokemonName) => {
  let result = []
  if (pokemonName === '') {
    console.log('Debes ingresar un nombre de Pokemon')
  }
   else {
    entrenadores.forEach((trainer) => {
      const [ foundPokemon ] = trainer.equipo.filter((pokemon) => pokemon.nombre.toLowerCase().includes(pokemonName.toLowerCase()))
      if (foundPokemon) {
        result.push(foundPokemon)
      }
    })
  }
  console.log('Resultado de la búsqueda:', result)
  return result

}

findPokemon('ch')

// Desafío 3: Tipo con Promedio de Nivel Más Alto

const highType = (trainerArray) => {
  let fuego = []
  let agua = []
  let planta = []
  let electrico = []
  let pelea = []
  let fantasma = []

  let meanByType = []

  // Separa por tipo
  trainerArray.forEach((trainer) => {
    trainer.equipo.forEach((pokemon) => {
      if (pokemon.tipo === 'Fuego') {
        fuego.push(pokemon)
      }
      else if (pokemon.tipo === 'Agua') {
        agua.push(pokemon)
      }
      else if (pokemon.tipo === 'Planta') {
        planta.push(pokemon)
      }
      else if (pokemon.tipo === 'Eléctrico') {
        electrico.push(pokemon)
      }
      else if (pokemon.tipo === 'Pelea') {
        pelea.push(pokemon)
      }
      else if (pokemon.tipo === 'Fantasma') {
        fantasma.push(pokemon)
      }
    })
  })

  // Función para formar arreglo de Promedio por Tipo
  const typeMean = (pokeType) => {
    const sum = pokeType.reduce((acc, curr) => acc + curr.nivel, 0) 
     meanByType.push({ type: pokeType[0].tipo, mean: sum / pokeType.length})
  }
  typeMean(fuego)
  typeMean(agua)
  typeMean(planta)
  typeMean(electrico)
  typeMean(pelea)
  typeMean(fantasma)

  // Encuentra mayor promedio
  let maxMean = 0
  let maxType = ''
  meanByType.forEach((pokemon) => {
    if (pokemon.mean > maxMean) {
      maxMean = pokemon.mean
      maxType = pokemon.type
    }
  })
  console.log('Tipo más poderoso:', maxType)
  return maxType
}

highType(entrenadores)
