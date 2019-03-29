export default class PetType {
    constructor(type, startMin, startRange, growMin, growRange) {
        this.type = type;
        this.startMin = startMin;
        this.startRange = startRange;
        this.growMin = growMin;
        this.growRange = growRange;
    }
    toData() {
        return [this.type, this.startMin, this.startRange, this.growMin, this.growRange];
    }
}
Object.assign(PetType, {
    ATTACK: 'ATTACK',
    DEFENCE: 'DEFENCE',
    MAGIC: 'MAGIC',
    BALANCE: 'BALANCE'
});