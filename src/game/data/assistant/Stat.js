export default class Stat {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    toData() {
        return [this.name, this.value];
    }
}

Object.assign(Stat, {
    ATTACK: 'ATTACK',
    hp: 'hp',
    mp: 'mp',
    str: 'str',
    dex: 'dex',
    intelligence: 'intelligence',
    will: 'will',
    luck: 'luck',
    attackMin: 'attackMin',
    attackMax: 'attackMax',
    balance: 'balance',
    crit: 'crit',
    crit_mul: 'crit_mul',
    defence: 'defence',
    protection: 'protection',
    spellChance: 'spellChance',
    manaConsumption: 'manaConsumption',
    protectionIgnore: 'protectionIgnore',
    protectionReduce: 'protectionReduce',
    magicDamage: 'magicDamage'
});