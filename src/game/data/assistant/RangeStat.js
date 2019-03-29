var count = 0;
export default class RangeStat {
    constructor(name, valueMin, changeRange) {
        this.id = count++;
        this.name = name;
        this.valueMin = valueMin;
        this.changeRange = changeRange;
    }
    toData() {
        return [this.id, this.name, this.valueMin, this.changeRange, this.eId];
    }
}