export default class PetSkillData {
    constructor(name, realName, setList) {
        this.name = name;
        this.realName = realName;
        this.setList = setList;
    }
    toData() {
        return [this.name, this.realName, this.setList];
    }
}