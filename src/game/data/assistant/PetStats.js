export default class PetStats {
    constructor(hp, mp, attmin, attmax, def, pro, balance, cri, criMul, magAtt) {
        this.hp = hp;
        this.mp = mp;
        this.attmin = attmin;
        this.attmax = attmax;
        this.def = def;
        this.pro = pro;
        this.balance = balance;
        this.cri = cri;
        this.criMul = criMul;
        this.magAtt = magAtt;
    }
    toData() {
        return [this.hp, this.mp, this.attmin, this.attmax, this.def, this.pro, this.balance, this.cri, this.criMul, this.magAtt];
    }
}