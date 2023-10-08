import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-10 font-bold text-lg shadow-md py-3">
    <Link to="/" className="hover:text-gray-500">Home</Link>
    <Link to="/create" className="hover:text-gray-500">Create</Link>
    </nav>
  )
}

export default Navbar