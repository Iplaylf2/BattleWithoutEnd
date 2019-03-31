var count = 0;
export default class PetType {
    constructor(type, startMin, startRange, growMin, growRange) {
        this.id = count++;
        this.type = type;
        this.startMin = startMin;
        this.startRange = startRange;
        this.growMin = growMin;
        this.growRange = growRange;

        this.startMin.type = 'startMin';
        this.startMin.tId = this.id;
        this.startRange.type = 'startRange';
        this.startRange.tId = this.id;
        this.growMin.type = 'growMin';
        this.growMin.tId = this.id;
        this.growRange.type = 'growRange';
        this.growRange.tId = this.id;
    }
    toData() {
        return [this.id, this.type];
    }
}
Object.assign(PetType, {
    ATTACK: 'ATTACK',
    DEFENCE: 'DEFENCE',
    MAGIC: 'MAGIC',
    BALANCE: 'BALANCE'
});