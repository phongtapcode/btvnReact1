import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import './DefaultLayout.scss'
function DefaultLayout(props){
    return(
        <>
        <Header/>
         <main className="main d-flex">
            <section className="main__sidebar">
                <SideBar/>
            </section>
            <section className="main__content">
                {props.children}
            </section>
        </main> 
        </>
    )
}
export default DefaultLayout;