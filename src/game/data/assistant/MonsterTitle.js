var count = 0;
export default class MonsterTitle {
    constructor(name, statMulList, xpMul, goldMul, dropMul) {
        this.id = count++;
        this.name = name;
        this.statMulList = statMulList;
        this.xpMul = xpMul;
        this.goldMul = goldMul;
        this.dropMul = dropMul;

        this.statMulList.map(s => { s.mId = this.id; });
    }
    toData() {
        return [this.id, this.name, this.xpMul, this.goldMul, this.dropMul];
    }
}