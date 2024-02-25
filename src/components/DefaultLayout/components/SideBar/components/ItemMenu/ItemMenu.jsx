import "./ItemMenu.scss";
function ItemMenu({data}) {
  return (
    <div className="itemmenu">
    <span className="itemmenu__nameicon">
      <i className={data.classIcon}></i>
      <span>{data.name}</span>
    </span>
      <span className="itemmenu__badge">
        {
            data.badge.map((item)=>{
                return <span className={`badge bg-${item.background}`}>{item.text}</span>
            })
        }
      </span>
    </div>
  );
}

export default ItemMenu;
