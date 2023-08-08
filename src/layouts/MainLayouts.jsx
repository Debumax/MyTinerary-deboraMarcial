import Header from "./Header"
import Footer from "./Footer"
import { Children } from "react"


function MainLoyout({Children}) {
    return (
        <>
        <Header />
            {Children}
        <Footer/>

        </>
    )
}
export default MainLoyout