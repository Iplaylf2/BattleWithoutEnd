var count = 0;
export default class PetSkillData {
    constructor(name, realName, setList) {
        this.id = count++;
        this.name = name;
        this.realName = realName;
        this.setList = setList;
    }
    toData() {
        return [this.id, this.name, this.realName, this.setList];
    }
}