export default function (prop) {
    return [
        <h1>战斗无止境</h1>,
        <ul>
            {prop.source.map(career => <li >{career.name}</li>)}
        </ul>,
        <div>
            <ul>
                <li></li>
            </ul>
            <div></div>
            <input type="button" />
        </div>
    ];
}