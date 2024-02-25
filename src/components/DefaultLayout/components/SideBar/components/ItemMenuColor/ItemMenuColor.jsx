
function ItemMenuColor({text,color}) {
  return (
    <div className="itemmenu">
    <span className="itemmenu__nameicon">
      <i className={'fa-regular fa-circle'} style={{color: color, fontSize: '12px'}}></i>
      <span>{text}</span>
    </span>
    </div>
  );
}

export default ItemMenuColor;
