export default class StatMul {
    constructor(name, mul, add) {
        this.name = name;
        this.mul = mul;
        this.add = add;
    }
    toData() {
        return [this.name, this.mul, this.add];
    }
}