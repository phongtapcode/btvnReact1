import "./SideBar.scss";
import { Input } from "antd";
import ItemMenuClick from "./components/ItemMenuClick/ItemMenuClick";
import { useState } from "react";
import ItemMenu from "./components/ItemMenu/ItemMenu";
import ItemMenuColor from "./components/ItemMenuColor/ItemMenuColor";
const { Search } = Input;

var itemMenu = [
  {
    type: 1,
    classIcon: "fa-solid fa-gauge",
    name: "Dashboard",
    treeview: ["Dashboard v1", "Dashboard v2"],
    hidden: false,
  },
  {
    type: 2,
    classIcon: "fa-regular fa-file",
    name: "Layout Options",
    badge: [{ text: "4", background: "primary" }],
    hidden: false,
  },
  {
    type: 2,
    classIcon: "fa-solid fa-table-cells",
    name: "Widgets",
    badge: [{ text: "new", background: "success" }],
    hidden: false,
  },
  {
    type: 1,
    classIcon: "fa-solid fa-chart-pie",
    name: "Charts",
    treeview: ["ChartJS", "Morris", "Flot", "Inline charts"],
    hidden: false,
  },
  {
    type: 1,
    classIcon: "fa-solid fa-laptop",
    name: "UI Element",
    treeview: ["General", "Icons", "Buttons", "Sliders", "Timeline", "Modals"],
    hidden: false,
  },
  {
    type: 1,
    classIcon: "fa-solid fa-table",
    name: "Tables",
    treeview: ["Simple tables", "Data tables"],
    hidden: false,
  },
  {
    type: 2,
    classIcon: "fa-solid fa-calendar-days",
    name: "Calendar",
    badge: [
      { text: "17", background: "primary" },
      { text: "3", background: "danger" },
    ],
    hidden: false,
  },
  {
    type: 2,
    classIcon: "fa-regular fa-envelope",
    name: "Mailbox",
    badge: [
      { text: "5", background: "danger" },
      { text: "16", background: "success" },
      { text: "12", background: "warning" },
    ],
    hidden: false,
  },
  {
    type: 1,
    classIcon: "fa-solid fa-folder",
    name: "Examples",
    treeview: [
      "Invoice",
      "Profile",
      "Login",
      "Lockscreen",
      "404 Error",
      "500 Error",
      "Blank Page",
      "Pace Page",
    ],
    hidden: false,
  },
  {
    type: 1,
    classIcon: "fa-solid fa-share",
    name: "Multilevel",
    treeview: ["Level One", "Level One", "Level One"],
    hidden: false,
  },
  {
    type: 2,
    classIcon: "fa-solid fa-folder-open",
    name: "Documentation",
    badge: [],
    hidden: false,
  },
];

function SideBar() {
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    itemMenu[index].hidden = !itemMenu[index].hidden;
  };

  return (
    <>
      <div className="userinfor">
        <div className="userinfor__left">
          <img src="/src/assets/imgs/user.jpg" />
        </div>
        <div className="userinfor__right">
          <div className="userinfor__right--name">Alexander Pierce</div>
          <div className="userinfor__right--status">Online</div>
        </div>
      </div>

      <div className="search">
        <Search
          placeholder="Search..."
          style={{
            width: 200,
          }}
        />
      </div>

      <div className="sidebarmenu">
        <div className="sidebarmenu__title">MAIN NAVIGATION</div>
        {itemMenu.map((item, index) => {
          if (item.type === 1) {
            return (
              <ItemMenuClick
                key={index}
                handleClick={() => {
                  itemMenu.map((itemi, i) => {
                    if (i === index) {
                      itemMenu[i].hidden = !itemMenu[i].hidden;
                    } else {
                      itemMenu[i].hidden = false;
                    }
                  });
                  setLoading(!loading);
                }}
                hidden={itemMenu[index].hidden}
                data={item}
              />
            );
          } else {
            return <ItemMenu key={index} data={item} />;
          }
        })}
      </div>

      <div className="sidebarlabel">
        <div className="sidebarmenu__title">LABELS</div>
        <ItemMenuColor text="Impotant" color="red"/>
        <ItemMenuColor text="Warning" color="#f39c12"/>
        <ItemMenuColor text="Information" color="#00c0ef"/>
      </div>
    </>
  );
}
export default SideBar;
