const formatTime = function (date) {
    return `[${date.getMonth()}/${date.getDay()}/${date.getHours()}:${date.getMinutes()}]`;
};

export default function (prop) {
    return (
        <li>
            <span>角色</span>
            <span>{prop.name}</span>
            <input type="button" value="读取" onClick={prop.onRead.bind(null, prop.id)} />
            <span>{formatTime(prop.time)}</span>
            <input type="button" value="删除" onClick={prop.onDelete.bind(null, prop.id)} />
        </li>
    );
};