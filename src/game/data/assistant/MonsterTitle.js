export default class MonsterTitle {
    constructor(name, statMulList, xpMul, goldMul, dropMul) {
        this.name = name;
        this.statMulList = statMulList;
        this.xpMul = xpMul;
        this.goldMul = goldMul;
        this.dropMul = dropMul;
    }
    toData() {
        return [this.name, this.statMulList, this.xpMul, this.goldMul, this.dropMul];
    }
}