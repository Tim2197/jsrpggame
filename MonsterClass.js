
class Monster extends LivingEntity{

    monsterType = 'default';

    get properties() {
        return [
            'monsterType',
        ]
    }


    constructor(monsterType){
        super()
        this.monsterType = monsterType;
        this.name = this.monsterType;
    }
}

class Goblin extends Monster {

    constructor(lvl){
        super()
        this.health = 10 * lvl;
        this.agility = 5 * lvl;
        this.armorClass = 12 * lvl;
        this.dropsLoot;
        this.strength = 1 * lvl;
        this.isDead;
        this.lootTable = [{name: 'Goblin Armor', probability: "common"}];
        this.name = 'goblin';
        this.expDropped = 10 * lvl;
        this.lvl = lvl;
    }
    
}

class Wraith extends Monster {

    constructor(lvl){
        super()
        this.health = 10 * lvl;
        this.agility = 5 * lvl;
        this.armorClass = 12 * lvl;
        this.dropsLoot;
        this.strength = 1 * lvl;
        this.isDead;
        this.lootTable = [{name: 'Wraith Essence', probability: "uncommon"}];
        this.name = 'wraith';
        this.expDropped = 10 * lvl;
        this.lvl = lvl;
        this.monsterName = this.name;
    }
    
}

class HealthyWraith extends Wraith {

    constructor(lvl){
        super(lvl)
        this.health = 20 * lvl;
        this.monsterName = 'healthy wraith'
    }
}


//add isUndead property to monster class


//Test for custom monster

    // let lootMonsterTest = new Monster(10, 25, 2, 1500, [
    // {
    //     name: "Zarthos' incredible Ocarina",
    //     probability: "rare"
    // },
    // {
    //      name: "Aiko's Handsome Ring",
    //      probability: "mythic"
    // },
    // {   name: "Kanuna's Amulet of Truth",
    //     probability: "uncommon"
    // },
    // {
    //     name: "lootMonsterTest drop",
    //     probability: "always"
    // }], 10, 'lootMonsterTest')

//Test for pre-configured monsters 

    // let goblin = new Goblin(1);
    // goblin.damage(10)

    // let wraith = new Wraith(2)
    // console.log(wraith)

    let healthyWraith = new HealthyWraith(2)
    // console.log(healthyWraith)

    // let defaultMonster = new Monster(10,10,10,10,[{name: 'item', probability: 'rare'}], 10, 'guy', 2);
    // console.log(defaultMonster)

  

    healthyWraith.setHealth(100)

    healthyWraith.damage(39)
    healthyWraith.damage(1)
    healthyWraith.damage(60)

