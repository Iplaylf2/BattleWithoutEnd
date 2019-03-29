export default class PetData {
    constructor(name, realName, type, mc) {
        this.name = name;
        this.realName = realName;
        this.type = type;
        this.mc = mc;
    }
    toData() {
        return [this.name, this.realName, this.type, this.mc];
    }
}