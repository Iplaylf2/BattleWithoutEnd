const formatTime = function (date) {
    return `[${date.getMonth()}/${date.getDay()}/${date.getHours()}:${date.getMinutes()}]`;
};

export default function (prop) {
    return (
        <li>
            <span>角色</span>
            <span>{prop.role.name}</span>
            <input type="button" value="读取" onClick={prop.onRead.bind(null, prop.role.id)} />
            <span>{formatTime(prop.role.time)}</span>
            <input type="button" value="删除" onClick={prop.onDelete.bind(null, prop.role.id)} />
        </li>
    );
};