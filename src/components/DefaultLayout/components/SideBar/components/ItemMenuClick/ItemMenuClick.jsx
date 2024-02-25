import './ItemMenuClick.scss'
function ItemMenuClick({handleClick,hidden,data}){
    
    return(<div className="itemmenuclick" onClick={handleClick}>
    <div className='itemmenuclick__nameicon'>
        <i className={data.classIcon}></i>
        <span>{data.name}</span>
    </div>
    
        <i className="fa-solid fa-chevron-left"></i>
        <ul className='itemmenuclick__treeview' style={{display: !hidden?"none":"block"}}>
        {
            data.treeview.map((item)=>{
             return (<li>
            <i className="fa-regular fa-circle"></i>
            <a href='#'>{item}</a>
            </li>)
            })
        }
        </ul>
    </div>)
}

export default ItemMenuClick