var count = 0;
export default class StatMul {
    constructor(name, mul, add = 0) {
        this.id = count++;
        this.name = name;
        this.mul = mul;
        this.add = add;
    }
    toData() {
        return [this.id, this.name, this.mul, this.add, this.mId];
    }
}