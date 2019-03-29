import EquipmentData from './EquipmentData.js'

export default class WeaponData extends EquipmentData {
    constructor(...args) {
        super(...args.slice(0, 5), args[6]);
        this.category = args[5];
    }
    toData() {
        return super.toData().concat([this.category]);
    }
}