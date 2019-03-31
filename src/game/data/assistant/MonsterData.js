var count = 0;
export default class MonsterData {
    constructor(name, realName, hp, attack_min, attack_max, defence, protection, crit, crit_mul, balance, CP) {
        this.id = count++;
        this.name = name;
        this.realName = realName;
        this.hp = hp;
        this.attack_min = attack_min;
        this.attack_max = attack_max;
        this.defence = defence;
        this.protection = protection;
        this.crit = crit;
        this.crit_mul = crit_mul;
        this.balance = balance;
        this.CP = CP;
    }
    toData() {
        return [this.id, this.name, this.realName, this.hp, this.attack_min, this.attack_max, this.defence, this.protection, this.crit, this.crit_mul, this.balance, this.CP];
    }
}