import style from './inventory.css'

export default function (prop) {
    return (
        <div
            className={prop.className}
        >
            <div className={style.wrapper}>
                <div>
                    <span>价值</span>
                    <span>0/50</span>
                    <span>类型</span>
                </div>
                <ul></ul>
                <div>
                    <div><span>费用</span><span>$test</span></div>
                    <div><span>成功率</span><span>test</span></div>
                    <div><span>图标</span><input type="button" value="锻造" /></div>
                </div>
            </div>
        </div>
    );
}