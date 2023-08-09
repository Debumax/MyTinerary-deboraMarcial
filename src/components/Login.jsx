import login from "../../public/login.png"

function Login() {
  return (
        <div className="flex space-x-1 justify-center items-center bg-orange-200">
          <div>
            <img src={login} alt="login" className="w-6"/>
          </div>
          <div>
            <p>login</p>
          </div>
        </div>
  )
}

export default Login