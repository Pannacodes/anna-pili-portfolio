
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <NavLink to="/" className="font-bold text-xl">
        anna pili
      </NavLink>

      <div className="flex gap-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'font-bold' : 'text-gray-500'
          }
        >
          about me
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
