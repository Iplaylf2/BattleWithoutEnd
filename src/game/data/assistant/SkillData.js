var count = 0;
export default class SkillData {
    constructor(name, realName, category, statList, effectList, lvupCostList) {
        this.id = count++;
        this.name = name;
        this.realName = realName;
        this.category = category;
        this.statList = statList;
        this.effectList = effectList || [];
        this.lvupCostList = lvupCostList;
    }
    toData() {
        return [this.id, this.name, this.realName, this.category, this.statList.map(l => l.map(s => s.toData())), this.effectList.map(l => l.map(s => s.toData())), this.lvupCostList];
    }
}