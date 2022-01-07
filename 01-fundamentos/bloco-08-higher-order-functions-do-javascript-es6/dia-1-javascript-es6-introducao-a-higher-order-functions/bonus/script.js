//PARTE 1

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

console.log(battleMembers)

const danoDragon = () => {
  return Math.floor(Math.random()*(dragon.strength - 15 +1)+15)
}

const danoWarrior = () => {
  return Math.floor(Math.random()*(warrior.strength*warrior.weaponDmg - warrior.strength +1)+warrior.strength)
}

const danoManaMago = () => {
let dano = Math.floor(Math.random()*(mage.intelligence*2 - mage.intelligence +1) + mage.intelligence)

const mana = mage.mana - 15*turno

if(mana<15){
  dano = "Não possui mana suficiente"
}

  return {
    dano,
    mana,
  }
}

//PARTE 2

const gameActions = {
  turnoWarrior: (danoWarrior) => {
    dragon.healthPoints = dragon.healthPoints - danoWarrior();
    warrior.damage = danoWarrior()
  },
  turnoMage: (danoManaMago) => {
    dragon.healthPoints = dragon.healthPoints - danoManaMago.dano;
    mage.damage = danoManaMago.dano;
    mage.mana = danoManaMago.mana;
  },
  turnoDragon: (danoDragon) => {
    mage.healthPoints = mage.healthPoints - danoDragon;
    warrior.healthPoints = warrior.healthPoints - danoDragon;
    dragon.damage = danoDragon();
  },

  resultado: () => {
    return battleMembers;
  }
};

gameActions.turnoWarrior(danoWarrior);
gameActions.turnoMage(danoManaMago);
gameActions.turnoDragon(danoDragon);

console.log('resultado:', gameActions.resultado())


