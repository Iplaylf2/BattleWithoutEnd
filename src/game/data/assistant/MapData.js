var count = 0;
export default class MapData {
    constructor(x, y, name, realName, modifier, monsterList, petList) {
        this.id = count++;
        this.x = x;
        this.y = y;
        this.name = name;
        this.realName = realName;
        this.modifier = modifier;
        this.monsterList = monsterList;
        this.petList = petList;

        this.monsterList.map(m => { m.mId = this.id; });
        this.petList.map(p => { p.mId = this.id; });
    }
    toData() {
        return [this.id, this.name, this.realName, this.modifier];
    }
}