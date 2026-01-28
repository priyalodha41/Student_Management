import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto max-w-7xl px-6 py-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          SCMS
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
            }
          >
            Add Student
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
            }
          >
            Students
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
