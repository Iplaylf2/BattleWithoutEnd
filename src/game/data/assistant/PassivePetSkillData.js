import PetSkillData from './PetSkillData.js'

export default class PassivePetSkillData extends PetSkillData {
    constructor(...args) {
        super(...args);
        this.type = 'Passive';
    }
    toData() {
        return super.toData().concat([this.type]);
    }
}