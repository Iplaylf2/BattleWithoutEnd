export default class MapData {
    constructor(x, y, name, realName, modifier, monsterList, petList) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.realName = realName;
        this.modifier = modifier;
        this.monsterList = monsterList;
        this.petList = petList;
    }
    toData() {
        return [this.name, this.realName, this.modifier, this.monsterList, this.petList];
    }
}