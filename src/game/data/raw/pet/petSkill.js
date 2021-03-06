import DefencePetSkillData from '../../assistant/DefencePetSkillData.js'
import PassivePetSkillData from '../../assistant/PassivePetSkillData.js'
import AttackPetSkillData from '../../assistant/AttackPetSkillData.js'

export const counterattack = new DefencePetSkillData("Counterattack", "反击", [[30, 50], [30, 100]]);
export const injury_resile = new DefencePetSkillData("Injury Resile", "反震", [[30, 25], [30, 50]]);
export const dodge = new DefencePetSkillData("Dodge", "闪避", [[15], [20]]);
export const taunt = new DefencePetSkillData("Taunt", "嘲讽", [[10], [20]]);
export const aggressive = new PassivePetSkillData("Aggressive", "血性", [[5], [7.5]]);
export const protective = new PassivePetSkillData("Protective", "守护", [[2], [2.5]]);
export const strong = new PassivePetSkillData("Strong", "强力", [[10], [15]]);
export const wisdom = new PassivePetSkillData("Wisdom", "智慧", [[5], [7.5]]);
export const wise = new PassivePetSkillData("Wise", "聪颖", [[1], [1.5]]);
export const slayer = new PassivePetSkillData("Slayer", "必杀", [[10, 2], [20, 2]]);
export const life_drain = new PassivePetSkillData("Life Drain", "吸血", [[20], [30]]);
export const good_or_evil = new PassivePetSkillData("Good or Evil", "善恶有报", [[50], [60]]);
export const meditation = new PassivePetSkillData("Meditation", "冥思", [[0.15, 10], [0.25, 15]]);
export const heal = new PassivePetSkillData("Heal", "治愈", [[0.3, 10], [0.5, 15]]);
export const double_hit = new PassivePetSkillData("Double hit", "连击", [[45], [55]]);
export const ice_spear = new AttackPetSkillData("Ice Spear", "冰刃", [[5, 1.5, 1, 25], [7, 2, 1, 35, 10, 2]]);
export const fireball = new AttackPetSkillData("Fireball", "火球", [[7, 2, 30, 1], [10, 2.5, 40, 1.25]]);
export const thunder = new AttackPetSkillData("Thunder", "雷击", [[10, 2.5, 0.025, 1, 35], [13, 3, 0.03, 1.25, 45]]);
export const defensive = new PassivePetSkillData("Defensive", "硬化", [[5], [7.5]]);