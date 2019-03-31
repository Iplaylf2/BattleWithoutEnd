import Stat from '../../assistant/Stat.js'
import StatMul from '../../assistant/StatMul.js'
import MonsterTitle from '../../assistant/MonsterTitle.js'

var a1 = [];
a1[0] = new StatMul(Stat.hp, 3);
a1[1] = new StatMul(Stat.defence, 1.5, 10);
a1[2] = new StatMul(Stat.protection, 1.5, 5);
var b1 = [];
b1[0] = new MonsterTitle("肉盾", a1, 3, 2, 1.5);
var a2 = [];
a2[0] = new StatMul(Stat.hp, 1.2);
b1[1] = new MonsterTitle("难看的", a2, 1.2, 1.2, 1.4);
b1[2] = new MonsterTitle("可疑的", [], 3, 3, 3);
var a3 = [];
a3[0] = new StatMul(Stat.ATTACK, 2, 20);
a3[1] = new StatMul(Stat.hp, 3, 30);
a3[2] = new StatMul(Stat.defence, 5, 20);
a3[3] = new StatMul(Stat.protection, 3, 15);
b1[3] = new MonsterTitle("未知的", a3, 5, 5, 1.8);
var a4 = [];
a4[0] = new StatMul(Stat.hp, 1.5);
b1[4] = new MonsterTitle("非常难看的", a4, 1.5, 1.5, 1.5);
var a5 = [];
a5[0] = new StatMul(Stat.ATTACK, 2);
a5[1] = new StatMul(Stat.hp, 2);
b1[5] = new MonsterTitle("看起来很凶的", a5, 2, 1.5, 1.5);
b1[6] = new MonsterTitle("刚赌赢了一把的", [], 1, 5, 1);
var a6 = [];
a6[0] = new StatMul(Stat.crit, 2, 15);
a6[1] = new StatMul(Stat.crit_mul, 2);
b1[7] = new MonsterTitle("眼神锐利的", a6, 2, 1.5, 1.5);
var a7 = [];
a7[0] = new StatMul(Stat.ATTACK, 1.5);
a7[1] = new StatMul(Stat.hp, 1.5);
a7[2] = new StatMul(Stat.crit, 2);
a7[3] = new StatMul(Stat.defence, 1, 10);
a7[4] = new StatMul(Stat.protection, 1, 5);
b1[8] = new MonsterTitle("10岁打到人的", a7, 3, 1.5, 1.6);
var a8 = [];
a8[0] = new StatMul(Stat.ATTACK, 2);
a8[1] = new StatMul(Stat.hp, 5);
a8[2] = new StatMul(Stat.defence, 2, 10);
b1[9] = new MonsterTitle("努力的 ", a8, 3, 1.5, 1.8);
var a9 = [];
a9[0] = new StatMul(Stat.ATTACK, 3);
a9[1] = new StatMul(Stat.hp, 3);
a9[2] = new StatMul(Stat.crit, 3);
a9[3] = new StatMul(Stat.defence, 2, 10);
a9[4] = new StatMul(Stat.protection, 2, 5);
a9[5] = new StatMul(Stat.crit_mul, 2);
b1[10] = new MonsterTitle("头头", a9, 4, 3, 2.2);
var a10 = [];
a10[0] = new StatMul(Stat.ATTACK, 2);
a10[1] = new StatMul(Stat.hp, 2);
b1[11] = new MonsterTitle("被诅咒的", a10, 0.5, 0.5, 0.7);
var a11 = [];
a11[0] = new StatMul(Stat.ATTACK, 0.8);
a11[1] = new StatMul(Stat.hp, 0.8);
b1[12] = new MonsterTitle("弱小的", a11, 0.5, 0.5, 0.7);
var a12 = [];
a12[0] = new StatMul(Stat.ATTACK, 1.5);
a12[1] = new StatMul(Stat.hp, 1.5);
b1[13] = new MonsterTitle("有野心的", a12, 1, 1, 1.4);
var a13 = [];
a13[0] = new StatMul(Stat.ATTACK, 1.5);
a13[1] = new StatMul(Stat.hp, 2);
b1[14] = new MonsterTitle("重获新生的", a13, 1.2, 1, 1.4);
var a14 = [];
a14[0] = new StatMul(Stat.defence, 3, 30);
a14[1] = new StatMul(Stat.protection, 3, 20);
b1[15] = new MonsterTitle("神圣的", a14, 3, 3, 2.1);
var a15 = [];
a15[0] = new StatMul(Stat.defence, 2, 20);
a15[1] = new StatMul(Stat.protection, 2, 10);
b1[16] = new MonsterTitle("将要灭绝的", a15, 2, 2, 1.7);
var a16 = [];
a16[0] = new StatMul(Stat.ATTACK, 1.5, 10);
a16[1] = new StatMul(Stat.hp, 2, 30);
a16[2] = new StatMul(Stat.defence, 1.5, 10);
a16[3] = new StatMul(Stat.protection, 1.5, 5);
a16[4] = new StatMul(Stat.crit, 1.5, 10);
a16[5] = new StatMul(Stat.crit_mul, 1.5);
b1[17] = new MonsterTitle("初级召唤的", a16, 1.5, 1.5, 2);
var a17 = [];
a17[0] = new StatMul(Stat.ATTACK, 2.5, 20);
a17[1] = new StatMul(Stat.hp, 3, 60);
a17[2] = new StatMul(Stat.defence, 2, 30);
a17[3] = new StatMul(Stat.protection, 2, 10);
a17[4] = new StatMul(Stat.crit, 2, 15);
a17[5] = new StatMul(Stat.crit_mul, 2);
b1[18] = new MonsterTitle("进阶召唤的", a17, 2, 2, 3);
var a18 = [];
a18[0] = new StatMul(Stat.ATTACK, 4, 30);
a18[1] = new StatMul(Stat.hp, 5, 90);
a18[2] = new StatMul(Stat.defence, 2.5, 50);
a18[3] = new StatMul(Stat.protection, 2.5, 18);
a18[4] = new StatMul(Stat.crit, 2.5, 25);
a18[5] = new StatMul(Stat.crit_mul, 2.5);
b1[19] = new MonsterTitle("大神召唤的", a18, 3, 3, 4);
var a19 = [];
a19[0] = new StatMul(Stat.ATTACK, 6, 40);
a19[1] = new StatMul(Stat.hp, 7, 120);
a19[2] = new StatMul(Stat.defence, 3.5, 70);
a19[3] = new StatMul(Stat.protection, 3.5, 30);
a19[4] = new StatMul(Stat.crit, 3.5, 40);
a19[5] = new StatMul(Stat.crit_mul, 3.5);
b1[20] = new MonsterTitle("精英召唤的", a19, 5, 5, 5);
var a20 = [];
a20[0] = new StatMul(Stat.ATTACK, 3, 50);
a20[1] = new StatMul(Stat.hp, 10, 100);
a20[2] = new StatMul(Stat.defence, 1.5, 30);
a20[3] = new StatMul(Stat.protection, 1.5, 35);
a20[4] = new StatMul(Stat.crit, 1.5, 10);
a20[5] = new StatMul(Stat.crit_mul, 1.5);
b1[21] = new MonsterTitle("远古的", a20, 10, 10, 2.8);
var a21 = [];
a21[0] = new StatMul(Stat.ATTACK, 3, 50);
a21[1] = new StatMul(Stat.hp, 50, 100);
a21[2] = new StatMul(Stat.defence, 0, 0);
a21[3] = new StatMul(Stat.protection, 1, 50);
a21[4] = new StatMul(Stat.crit, 2.5, 100);
a21[5] = new StatMul(Stat.crit_mul, 2.5, 50);
b1[22] = new MonsterTitle("区域BOS", a21, 20, 20, 3);

export default b1;