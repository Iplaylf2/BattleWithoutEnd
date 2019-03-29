export default class Title {
    constructor(name, realName, description, statMulList, maxFix, countFix) {
        this.name = name;
        this.realName = realName;
        this.description = description;
        this.statMulList = statMulList;
        this.maxFix = maxFix;
        this.countFix = countFix;
    }
    toData() {
        return [this.name, this.realName, this.description, this.statMulList, this.maxFix, this.countFix];
    }
}