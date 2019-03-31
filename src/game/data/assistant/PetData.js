var count = 0;
export default class PetData {
    constructor(name, realName, type, mc) {
        this.id = count++;
        this.name = name;
        this.realName = realName;
        this.type = type.type;
        this.mc = mc;
    }
    toData() {
        return [this.id, this.name, this.realName, this.type, this.mc];
    }
}