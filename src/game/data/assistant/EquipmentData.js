export default class EquipmentData {
    constructor(position, type, name, realName, stat, sortWeight) {
        this.position = position;
        this.type = type;
        this.name = name;
        this.realName = realName;
        this.stat = stat;
        this.sortWeight = sortWeight;
    }
    toData() {
        [this.position, this.type, this.name, this.realName, this.stat, this.sortWeight];
    }
}