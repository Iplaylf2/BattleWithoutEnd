import UnloadArchiveItem from './unloadArchiveItem.jsx'
import LoadArchiveItem from './loadArchiveItem.jsx'

const maxLength = 4;

export default function (prop) {
    const rest = [];
    for (let i = 0; i !== maxLength - prop.source.length; i++) {
        rest.push(<UnloadArchiveItem onCreate={prop.onCreate} />);
    }
    return (
        <ul>
            {prop.source.map(role => ({
                id: role.id,
                name: role.name,
                time: role.time
            })).map(role => <LoadArchiveItem {...role} onRead={prop.onRead} onDelete={prop.onDelete} />)}
            {rest}
        </ul>
    );
}