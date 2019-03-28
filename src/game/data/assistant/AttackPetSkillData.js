import PetSkillData from './PetSkillData.js'

export default class AttackPetSkillData extends PetSkillData {
    constructor(...args) {
        super(...args);
        this.type = 'Attack';
    }
    toData() {
        return super.toData().concat([this.type]);
    }
}