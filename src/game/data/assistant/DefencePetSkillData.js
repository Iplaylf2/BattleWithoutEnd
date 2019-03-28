import PetSkillData from './PetSkillData.js'

export default class DefencePetSkillData extends PetSkillData {
    constructor(...args) {
        super(...args);
        this.type = 'Defence';
    }
    toData() {
        return super.toData().concat([this.type]);
    }
}