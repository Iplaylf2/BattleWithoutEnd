export default function (prop) {
    return [
        <h1>战斗无止境</h1>,
        <input type="button" value="开始游戏" onClick={prop.onStart} />
    ];
}