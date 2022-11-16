class Monster {
    health = 10;
    strength = 1;
    agility = 4;
    isKillable = true;
    dropsLoot = true;
    dropsExp = true;
    expDropped = 10;
    lootTable = [
        {
            name: "Zarthos' incredible Ocarina",
            probability: "rare"
        },
        {
             name: "Aiko's Handsome Ring",
             probability: "mythic"
        },
        {   name: "Kanuna's Amulet of Truth",
            probability: "uncommon"
        }];
    armorClass = 5;
    monsterType = 'goblin';

    get properties() {
        return [
            'health',
            'strength',
            'agility',
            'isKillable',
            'dropsLoot',
            'givesExp',
            'expDropped',
            'lootTable',
            'armorClass',
            'monsterType'
        ]
    }


    constructor(health, strength, agility, expDropped, lootTable, armorClass, monsterType){
        this.health = health;
        this.strength = strength;
        this.agility = agility;
        this.isKillable;
        this.dropsLoot;
        this.dropsExp;
        this.expDropped = expDropped;
        this.lootTable = lootTable;
        this.armorClass = armorClass;
        this.monsterType = monsterType;
    }

    attack(type){
        if(type == 'basic'){
            console.log(`${this.monsterType} does a basic attack! ${this.monsterType} does ${this.strength} damage to the player!`)
        }
        if(type == 'special'){
            console.log(`${this.monsterType} does a basic attack! ${this.monsterType} does ${this.strength * 1.5} damage to the player!`)
        }
        if(type == 'final'){
            console.log(`${this.monsterType} does a basic attack! ${this.monsterType} does ${this.strength * 2} damage to the player!`)
        }
    }

    defend() {
        console.log(`${this.monsterType} tries defending`)
    }

    dodge() {
        if (this.agility > Player.agility){
            console.log(`${this.monsterType} is able to dodge.`)
        }
    }

    heal() {
        console.log(`${this.monsterType} heals itself for ${Math.floor(Math.random() * this.health)}`)
    }

    loot() {

        function lootDropChance() {
            return Math.floor(Math.random() * 99)
        }

        let rarities = {
            always: 100,
            common: 90,
            uncommon: 70,
            rare: 50,
            mythic: 10,
            legendary: 1,
        };

        console.log("\n")

        for (let i = 0; i < this.lootTable.length; i++){
            if(this.lootTable[i].probability == "always"){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
            if(this.lootTable[i].probability == "common" && lootDropChance() < rarities.common){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
            if(this.lootTable[i].probability == "uncommon" && lootDropChance() < rarities.uncommon){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
            if(this.lootTable[i].probability == "rare" && lootDropChance() < rarities.rare){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
            if(this.lootTable[i].probability == "mythic" && lootDropChance() < rarities.mythic){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
            if(this.lootTable[i].probability == "legendary" && lootDropChance() < rarities.legendary){
                console.log(`Player received ${this.lootTable[i].name}`)
            }
        }

        console.log("\n")
    }


}
// These Two Were Tests From before there was a randomized loot pool that required the loot table to be an object
// let goblin = new Monster(10, 20, 1, 1000, ["Zarthos' Galactic Ocarina"], 12, 'goblin');
// let wraith = new Monster(10, 25, 2, 1250, ["Kavall's Hammer", "Healing Potion", "Wraith Essense", "Wisp in a Bottle"], 10, 'wraith');
let lootMonsterTest = new Monster(10, 25, 2, 1500, [
    {
        name: "Zarthos' incredible Ocarina",
        probability: "rare"
    },
    {
         name: "Aiko's Handsome Ring",
         probability: "mythic"
    },
    {   name: "Kanuna's Amulet of Truth",
        probability: "uncommon"
    },
    {
        name: "lootMonsterTest drop",
        probability: "always"
    }], 10, 'lootMonsterTest')