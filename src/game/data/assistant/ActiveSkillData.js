import SkillData from './SkillData.js'

export default class ActiveSkillData extends SkillData {
    constructor(...args) {
        super(args[0], args[1], args[3], args[4], args[5], args[6]);
        this.type = args[2];
        this.setList = args[7];
    }
    toData() {
        return super.toData().concat([this.type, this.setList]);
    }
}