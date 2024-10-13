import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
       <div className="text-center flex-col justify-center items-center pt-32">
    <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
    <p className="text-2xl md:text-3xl font-light text-gray-700 mt-4">
      Oops! Page Not Found.
    </p>
    <p className="text-md md:text-lg text-gray-600 mt-2 mb-6">
      It might have been moved or deleted.
    </p>
    <Link to={"/"} className="inline-block px-8 py-3 bg-[#161D6F] text-white font-medium rounded-lg shadow-md hover:bg-[#2431c4] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150">
      Go back home
    </Link>
  </div>
    </div>
  )
}

export default NotFound