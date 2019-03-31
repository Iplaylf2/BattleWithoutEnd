var count = 0;
export default class Title {
    constructor(name, realName, description, statMulList, maxFix = 0, countFix = 0) {
        this.id = count++;
        this.name = name;
        this.realName = realName;
        this.description = description;
        this.statMulList = statMulList;
        this.maxFix = maxFix;
        this.countFix = countFix;

        this.statMulList.map(s => { s.mId = this.id; });
    }
    toData() {
        return [this.id, this.name, this.realName, this.description, this.maxFix, this.countFix];
    }
}