var count = 0;
export default class EquipmentData {
    constructor(position, type, name, realName, stat, sortWeight) {
        this.id = count++;
        this.position = position;
        this.type = type;
        this.name = name;
        this.realName = realName;
        this.stat = stat;
        this.sortWeight = sortWeight;

        stat.map(s => { s.eId = this.id; });
    }
    toData() {
        return [this.id, this.position, this.type, this.name, this.realName, this.sortWeight];
    }
}