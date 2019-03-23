import { useState } from 'react'

export default function (prop) {
    const [name, setName] = useState('');
    return (
        <li>
            <label>
                角色
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            {name.length !== 0 && <input type="button" value="新建" onClick={prop.onCreate.bind(null, name)} />}
        </li>
    );
};