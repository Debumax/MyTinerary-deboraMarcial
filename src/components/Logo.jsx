import logo from "../../public/logo.png"

function Logo() {
    return (
        <div className="flex flex-wrap justify-center items-center bg-orange-200">
            <div className="pr-2 w-16  bg-orange-500">
                <img src={logo} alt="luna de puntas" className="rounded-full" />
            </div>
            <div>
                <p>MyTinerary</p>
            </div>
        </div>
    )
}

export default Logo