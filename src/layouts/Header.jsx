import Logo from "../components/Logo"
import NavBar from "../components/NavBar"
import Login from "../components/Login"

function Header() {
    return(
        <div className="bg-amber-300 flex flex-wrap p-2 justify-between">
            <Logo/>
            <NavBar/>
            <Login/>
        </div>
    )
}
export default Header