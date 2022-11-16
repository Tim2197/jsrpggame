export class LivingEntity {
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
    isDead = false;
    lvl = 1;
    name = 'Zarthos';

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
            'lvl',
            'name'
        ]
    }


    constructor(health, strength, agility, expDropped, lootTable, armorClass, lvl, name){
        this.health = health * lvl;
        this.strength = strength * lvl;
        this.agility = agility * lvl;
        this.isKillable;
        this.dropsLoot;
        this.dropsExp;
        this.expDropped = expDropped * lvl;
        this.lootTable = lootTable;
        this.armorClass = armorClass * lvl;
        this.isDead;
        this.lvl = lvl;
        this.name = name;
    }


    attack(type){
        if(type == 'basic'){
            console.log(`${this.name} does a basic attack! ${this.name} does ${this.strength} damage to the player!`)
        }
        if(type == 'special'){
            console.log(`${this.name} does a basic attack! ${this.name} does ${this.strength * 1.5} damage to the player!`)
        }
        if(type == 'final'){
            console.log(`${this.name} does a basic attack! ${this.name} does ${this.strength * 2} damage to the player!`)
        }
    }

    defend() {
        console.log(`${this.name} tries defending`)
    }

    dodge() {
        if (this.agility > Player.agility){
            console.log(`${this.name} is able to dodge.`)
        }
    }

    damage(dmg) {
        if(dmg){
            this.health = this.health - dmg;
            this.checkDeath()
            if(!this.isDead){
                console.log(`${this.name} now has ${this.health}`)
            }
        }
    }

    heal() {
        console.log(`${this.name} heals itself for ${Math.floor(Math.random() * this.health)}`)
    }

    loot() {

        function lootDropChance() {
            return Math.floor(Math.random() * 99)
        }

        let rarities = {
            always: 100,
            common: 75,
            uncommon: 50,
            rare: 30,
            mythic: 10,
            legendary: 1,
        };

        console.log("\n")

        let lootedItemsArray = [];

        for (let i = 0; i < this.lootTable.length; i++){
            if(this.lootTable[i].probability == "always"){
                lootedItemsArray.push(this.lootTable[i])
            }
            if(this.lootTable[i].probability == "common" && lootDropChance() < rarities.common){
                lootedItemsArray.push(this.lootTable[i])
            }
            if(this.lootTable[i].probability == "uncommon" && lootDropChance() < rarities.uncommon){
                lootedItemsArray.push(this.lootTable[i])
            }
            if(this.lootTable[i].probability == "rare" && lootDropChance() < rarities.rare){
                lootedItemsArray.push(this.lootTable[i])
            }
            if(this.lootTable[i].probability == "mythic" && lootDropChance() < rarities.mythic){
                lootedItemsArray.push(this.lootTable[i])
            }
            if(this.lootTable[i].probability == "legendary" && lootDropChance() <= rarities.legendary){
                lootedItemsArray.push(this.lootTable[i])
            }
            if (lootedItemsArray.length > 0){
                console.log(`Player received ${lootedItemsArray[i].name}`)
            }
            else{
                console.log(`Player received no items.`)
            }
        }

        console.log("\n")
    }

    checkDeath() {
        if(this.health <= 0){
            this.setDeath()
        }
    }

    setDeath() {
        let dead;
        this.isDead = true;
        if(this.isDead == true){
            dead = 'dead'
            console.log(`${this.name} is ${dead}`)
            this.loot()
        }
        
        
    }


    setHealth(int){
        this.health = int;
    }
    setStrength(int){
        this.strength = int;
    }
    setAgility(int){
        this.agility = int;
    }
    setIsKillable(bool){
        this.isKillable = bool;
    }
    setDropsLoot(bool){
        this.dropsLoot = bool;
    }
    setDropsExp(bool){
        this.dropsExp = bool;
    }
    setExpDropped(int){
        this.expDropped = int;
    }
    setLootTable(obj){
        this.lootTable = obj;
    }
    setArmorClass(int){
        this.armorClass = int;
    }
    setName(str){
        this.name = str;
    }
}