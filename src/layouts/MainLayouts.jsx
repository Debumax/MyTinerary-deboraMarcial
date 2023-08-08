import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
function MainLoyout({children}) {
    return (
        
        <>
        <NavBar />
        {children}
        <Footer />
        </>
    )
}
export default MainLoyout