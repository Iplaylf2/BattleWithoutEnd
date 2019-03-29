export default class SkillData {
    constructor(name, realName, category, statList, effectList, lvupCostList) {
        this.name = name;
        this.realName = realName;
        this.category = category;
        this.statList = statList;
        this.effectList = effectList;
        this.lvupCostList = lvupCostList;
    }
    toData() {
        return [this.name, this.realName, this.category, this.statList, this.effectList, this.lvupCostList];
    }
}