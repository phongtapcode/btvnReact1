import "./Header.scss";

function Header() {
  return (
    <header className="header">

      <div className="header__left">
        <span className="header__left--logo">
          <b>Admin</b>LTE
        </span>
      </div>

      <div className="header__right">
            <div className="header__right--sidebartoogle">
            <i className="fa-solid fa-bars"></i>
            </div>
            <div className="header__right--menu">
                <ul>
                    <li className="envelope"><i className="fa-regular fa-envelope"></i><span className="badge bg-success">4</span></li>
                    <li className="bell"><i className="fa-regular fa-bell"></i><span className="badge bg-warning">10</span></li>
                    <li className="flag"><i className="fa-regular fa-flag"></i><span className="badge bg-danger">9</span></li>
                    <li className="user">
                        <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg"/>
                        <span className="user__name">Alexander Pierce</span>
                    </li>
                    <li className="gear"><i className="fa-solid fa-gears"></i></li>
                </ul>
            </div>
      </div>
    </header>
  );
}
export default Header;
