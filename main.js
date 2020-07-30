/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(name, period, diet, extinct= false) {
  return {
    species: name,
    period: period,
    carnivore: diet,
    extinct,

  }
}

const makeSingular = function(dino) {
  const dinoCopy = Object.assign({}, dino);
  const dinoSpecies = dinoCopy.species

    if (dino.species.endsWith('us')) {
    dinoCopy.species = dinoSpecies.slice(0, dinoSpecies.length -2)
  }
  return dinoCopy;
}

const truncateSpecies = function(dino) {
  const dinoCopy = Object.assign({}, dino);
  const dinoSpecies = dinoCopy.species

  if (dinoSpecies.length > 10 ) {
    dinoCopy.species = dinoSpecies.slice(0, 7) + '...'
  } 
  return dinoCopy;
}

const makeExtinct = function(dino) {
  return makeDino(dino.species, dino.period, dino.carnivore, true)
}

const isCarnivore = function(dino) {
  return dino.carnivore;
}

const isExtinct = function(dino) {
  return dino.extinct;
}

const isTriassic = function(dino) {
  return dino.period === 'Triassic';
}

const isJurassic = function(dino) {
  return dino.period === 'Jurassic';
}

const isCretaceous = function(dino) {
  return dino.period === "Cretaceous";
}


/***********************
 * ITERATION FUNCTIONS *
 **********************/
const singularizeDinos = (dinos) => {
  return dinos.map(makeSingular);
}

const truncateDinos = (dino) => {
  return dino.map(truncateSpecies);
}

const makeAllExtinct = (dino) => {
  return dino.map(makeExtinct)
}
 
const carnivoresOnly = (dino) => {
  return dino.filter(isCarnivore)
}

const herbivoresOnly = (dino) => {
  return dino.filter(dino => !dino.carnivore);
}

const extinctOnly = (dino) => {
  return dino.filter(isExtinct);
}

const notExtinct = (dino) => {
  return dino.filter(dino => !dino.extinct);
}

const triassicOnly = (dino) => {
  return dino.filter(isTriassic);
}

const notTriassic = (dino) => {
  return dino.filter(dino => isTriassic(dino) === false)
}


/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
