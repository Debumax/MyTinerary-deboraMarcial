import Carrusel from "../components/Carrusel"

function Slice() {
    return (
        <div className=" bg-teal-300 flex p-2 justify-center space-x-2 ">
            <div className="bg-orange-100">
                <button>izq</button>
            </div>
            <div className="bg-orange-100">
                <Carrusel/>
            </div>
            <div className="bg-orange-100">
                <button>der</button>
            </div>
        </div>
    )
}
export default Slice