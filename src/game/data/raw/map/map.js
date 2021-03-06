import MonsterList from '../../assistant/MonsterList.js'
import PetDataList from '../../assistant/PetDataList.js'
import MapData from '../../assistant/MapData.js'

var a1 = [];
a1[0] = MonsterList.Young_Raccoon;
a1[1] = MonsterList.Young_Gray_Raccoon;
a1[2] = MonsterList.Young_Brown_Fox;
a1[3] = MonsterList.White_Spiderling;
a1[4] = MonsterList.White_Spider;
a1[5] = MonsterList.Brown_Fox;
a1[6] = MonsterList.Young_Red_Fox;
a1[7] = MonsterList.Black_Town_Rat;
a1[8] = MonsterList.Brown_Town_Rat;
var b1 = [];
b1[0] = PetDataList.att_fox;
b1[1] = PetDataList.att_rat;
b1[2] = PetDataList.def_fox;
b1[3] = PetDataList.bal_fox;
var c1 = [];
c1[0] = new MapData(85, 314, "Town of Beginner", "新手镇", 0, a1, b1);
var a2 = [];
a2[0] = MonsterList.Raccoon;
a2[1] = MonsterList.Old_Mimic;
a2[2] = MonsterList.Red_Spiderling;
a2[3] = MonsterList.Young_Gray_Fox;
a2[4] = MonsterList.Giant_Spiderling;
a2[5] = MonsterList.Red_Fox;
var b2 = [];
b2[0] = PetDataList.def_rat;
b2[1] = PetDataList.att_rat;
b2[2] = PetDataList.mag_rat;
b2[3] = PetDataList.att_spider;
b2[4] = PetDataList.def_spider;
b2[5] = PetDataList.att_fox;
b2[6] = PetDataList.def_fox;
b2[7] = PetDataList.bal_fox;
c1[1] = new MapData(130, 270, "Gairech Hill", "格林山脉", 0.4, a2, b2);
var a3 = [];
a3[0] = MonsterList.White_Kiwi;
a3[1] = MonsterList.Black_Kiwi;
a3[2] = MonsterList.Green_Kiwi;
a3[3] = MonsterList.Gold_Kiwi;
a3[4] = MonsterList.Old_Sand_Mimic;
a3[5] = MonsterList.Young_Goblin;
var b3 = [];
b3[0] = PetDataList.def_rat;
b3[1] = PetDataList.att_rat;
b3[2] = PetDataList.mag_rat;
b3[3] = PetDataList.att_spider;
b3[4] = PetDataList.def_spider;
b3[5] = PetDataList.att_wolf;
b3[6] = PetDataList.mag_wolf;
c1[2] = new MapData(40, 240, "Alby Peninsula", "斯特莱恩", 0.8, a3, b3);
var a4 = [];
a4[0] = MonsterList.Dingo;
a4[1] = MonsterList.Small_Ice_Worm;
a4[2] = MonsterList.Stone_Mimic;
a4[3] = MonsterList.Young_Poison_Goblin;
a4[4] = MonsterList.Brown_tailed_Mongoose;
a4[5] = MonsterList.White_Ant_Lion;
var b4 = [];
b4[0] = PetDataList.att_spider;
b4[1] = PetDataList.def_spider;
b4[2] = PetDataList.att_wolf;
b4[3] = PetDataList.mag_wolf;
b4[4] = PetDataList.def_bear;
b4[5] = PetDataList.bal_bear;
c1[3] = new MapData(115, 170, "Forest of Souls", "灵魂之森", 1.2, a4, b4);
var a5 = [];
a5[0] = MonsterList.Cave_Rat;
a5[1] = MonsterList.Goblin;
a5[2] = MonsterList.Mimic;
a5[3] = MonsterList.Masked_Goblin;
a5[4] = MonsterList.Black_Aardvark;
a5[5] = MonsterList.Black_Wolf;
a5[6] = MonsterList.Brown_Dire_Wolf;
a5[7] = MonsterList.Young_Brown_Warg;
var b5 = [];
b5[0] = PetDataList.att_wolf;
b5[1] = PetDataList.mag_wolf;
b5[2] = PetDataList.def_bear;
b5[3] = PetDataList.bal_bear;
b5[4] = PetDataList.att_bear;
c1[4] = new MapData(219, 137, "Filia", "费拉", 1.6, a5, b5);
var a6 = [];
a6[0] = MonsterList.Bandersnatch;
a6[1] = MonsterList.Blue_Snake;
a6[2] = MonsterList.Kobold;
a6[3] = MonsterList.Rat_Man;
a6[4] = MonsterList.Red_Spider;
a6[5] = MonsterList.White_Hair_Llama;
a6[6] = MonsterList.Kobold_Bandit;
var b6 = [];
b6[0] = PetDataList.def_bear;
b6[1] = PetDataList.bal_bear;
b6[2] = PetDataList.att_bear;
b6[3] = PetDataList.att_goblin;
b6[4] = PetDataList.def_goblin;
b6[5] = PetDataList.bal_goblin;
b6[6] = PetDataList.mag_goblin;
c1[5] = new MapData(300, 90, "The Frozen Shore", "冰封角", 2, a6, b6);
var a7 = [];
a7[0] = MonsterList.Coyote;
a7[1] = MonsterList.Zombie_Soldier;
a7[2] = MonsterList.White_Bear;
a7[3] = MonsterList.Maned_Aardvark;
a7[4] = MonsterList.Stone_Hound;
a7[5] = MonsterList.Goblin_Keeper;
a7[6] = MonsterList.Bard_Skeleton;
a7[7] = MonsterList.Bard_Skeleton;
var b7 = [];
b7[0] = PetDataList.att_goblin;
b7[1] = PetDataList.def_goblin;
b7[2] = PetDataList.bal_goblin;
b7[3] = PetDataList.mag_goblin;
c1[6] = new MapData(405, 63, "Ghost Hill", "幽魂谷", 2.4, a7, b7);
var a8 = [];
a8[0] = MonsterList.Burgundy_Spider;
a8[1] = MonsterList.Giant_Forest_Rat;
a8[2] = MonsterList.Gold_Goblin;
a8[3] = MonsterList.Gold_Kobold;
a8[4] = MonsterList.Gray_Gremlin;
a8[5] = MonsterList.Young_Lungfish;
a8[6] = MonsterList.Jackal;
var b8 = [];
b8[0] = PetDataList.att_goblin;
b8[1] = PetDataList.def_goblin;
b8[2] = PetDataList.bal_goblin;
b8[3] = PetDataList.mag_goblin;
c1[7] = new MapData(440, 156, "Misty Mountain", "谜雾山", 2.8, a8, b8);
var a9 = [];
a9[0] = MonsterList.Stripeless_Hyena;
a9[1] = MonsterList.Phantom_Silver_Tableware;
a9[2] = MonsterList.Stone_Mask;
a9[3] = MonsterList.Dragonfly;
a9[4] = MonsterList.Imp;
a9[5] = MonsterList.Ice_Sprite;
a9[6] = MonsterList.Lightning_Sprite;
var b9 = [];
b9[0] = PetDataList.att_goblin;
b9[1] = PetDataList.def_goblin;
b9[2] = PetDataList.bal_goblin;
b9[3] = PetDataList.mag_goblin;
b9[4] = PetDataList.att_skeleton;
b9[5] = PetDataList.def_skeleton;
b9[6] = PetDataList.bal_skeleton;
b9[7] = PetDataList.mag_skeleton;
c1[8] = new MapData(550, 100, "The Bite", "食人湾", 3.2, a9, b9);
var a10 = [];
a10[0] = MonsterList.Red_Lynx;
a10[1] = MonsterList.Skeleton;
a10[2] = MonsterList.Candle_Warrior;
a10[3] = MonsterList.Guardian_Horse_of_Ruins;
a10[4] = MonsterList.Gorgon;
a10[5] = MonsterList.Stone_Horse;
a10[6] = MonsterList.Topaz_Beetle;
a10[7] = MonsterList.Brown_Bear;
var b10 = [];
b10[0] = PetDataList.att_skeleton;
b10[1] = PetDataList.def_skeleton;
b10[2] = PetDataList.bal_skeleton;
b10[3] = PetDataList.mag_skeleton;
c1[9] = new MapData(635, 137, "The Gullet", "加尔特", 3.6, a10, b10);
var a11 = [];
a11[0] = MonsterList.Red_Kobold;
a11[1] = MonsterList.Stone_Zombie;
a11[2] = MonsterList.Black_Buffalo;
a11[3] = MonsterList.Shrieker;
a11[4] = MonsterList.Long_Horn_Gnu;
a11[5] = MonsterList.Wisp;
a11[6] = MonsterList.Saturos;
a11[7] = MonsterList.Skeleton_Ghost;
a11[8] = MonsterList.Guardian_of_Ruins;
var b11 = [];
b11[0] = PetDataList.att_skeleton;
b11[1] = PetDataList.def_skeleton;
b11[2] = PetDataList.bal_skeleton;
b11[3] = PetDataList.mag_skeleton;
b11[4] = PetDataList.att_ghost;
b11[5] = PetDataList.def_ghost;
b11[6] = PetDataList.bal_ghost;
b11[7] = PetDataList.mag_ghost;
c1[10] = new MapData(680, 189, "Casterly Rock", "暴土城", 4, a11, b11);
var a12 = [];
a12[0] = MonsterList.Black_Succubus;
a12[1] = MonsterList.Giant_Spider;
a12[2] = MonsterList.Stone_Horse;
a12[3] = MonsterList.Troll;
a12[4] = MonsterList.Gnoll;
a12[5] = MonsterList.Magic_Golem;
a12[6] = MonsterList.Captain_Skeleton;
a12[7] = MonsterList.Green_Snake;
a12[8] = MonsterList.Lost_Sahuagin;
var b12 = [];
b12[0] = PetDataList.att_ghost;
b12[1] = PetDataList.def_ghost;
b12[2] = PetDataList.bal_ghost;
b12[3] = PetDataList.mag_ghost;
c1[11] = new MapData(689, 264, "Bone Cave", "埋骨所", 4.4, a12, b12);
var a13 = [];
a13[0] = MonsterList.Hippo;
a13[1] = MonsterList.Brown_Ixion;
a13[2] = MonsterList.Incubus;
a13[3] = MonsterList.Zombie;
a13[4] = MonsterList.Bisque_Doll;
a13[5] = MonsterList.Ogre;
a13[6] = MonsterList.Esras;
a13[7] = MonsterList.Ogre_Warrior;
a13[8] = MonsterList.Giant_Ogre;
a13[9] = MonsterList.Siren;
var b13 = [];
b13[0] = PetDataList.att_zombie;
b13[1] = PetDataList.def_zombie;
b13[2] = PetDataList.bal_zombie;
b13[3] = PetDataList.mag_zombie;
c1[12] = new MapData(754, 323, "Cape Warth", "风怒角", 4.8, a13, b13);
var a14 = [];
a14[0] = MonsterList.Lion;
a14[1] = MonsterList.Balrog;
a14[2] = MonsterList.Cyclops;
a14[3] = MonsterList.Argus;
a14[4] = MonsterList.Grendel;
a14[5] = MonsterList.Cloaker;
a14[6] = MonsterList.Wight;
a14[7] = MonsterList.Ghost_Cloaker;
a14[8] = MonsterList.Black_Warrior;
a14[9] = MonsterList.Pink_Succubus;
a14[10] = MonsterList.Spider_Warrior;
var b14 = [];
b14[0] = PetDataList.att_ruin;
b14[1] = PetDataList.def_ruin;
b14[2] = PetDataList.bal_ruin;
b14[3] = PetDataList.mag_ruin;
c1[13] = new MapData(376, 448, "Wyl", "魔渊", 5.2, a14, b14);
var a15 = [];
a15[0] = MonsterList.Head_Hyena;
a15[1] = MonsterList.Hellcat;
a15[2] = MonsterList.Salamander;
a15[3] = MonsterList.Banshee;
a15[4] = MonsterList.Ruairi;
a15[5] = MonsterList.Yeti;
a15[6] = MonsterList.Mammoth;
a15[7] = MonsterList.Giant_Sand_Worm;
a15[8] = MonsterList.Ifrit;
var b15 = [];
b15[0] = PetDataList.att_ruin;
b15[1] = PetDataList.def_ruin;
b15[2] = PetDataList.bal_ruin;
b15[3] = PetDataList.mag_ruin;
b15[4] = PetDataList.def_unicorn;
b15[5] = PetDataList.bal_unicorn;
c1[14] = new MapData(204, 501, "Vaith", "神墓", 5.6, a15, b15);
var a16 = [];
a16[0] = MonsterList.Prairie_Dragon;
a16[1] = MonsterList.Giant_Lion;
a16[2] = MonsterList.Arc_Lich;
a16[3] = MonsterList.Desert_Dragon;
var b16 = [];
b16[0] = PetDataList.att_dragon;
b16[1] = PetDataList.mag_dragon;
b16[2] = PetDataList.def_unicorn;
b16[3] = PetDataList.bal_unicorn;
c1[15] = new MapData(395, 265, "???", "???", 6, a16, b16);

export default c1