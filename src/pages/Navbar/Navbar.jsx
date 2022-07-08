import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="navbar bg-base-100">
        <Link class="flex-1" to="/">
          <a class="btn btn-ghost normal-case text-xl">RavenEmotion</a>
        </Link>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/about-artist">About Artist</Link>
            </li>
            <li>
              <Link to="/paintings">Paintings</Link>
            </li>
            <li>
              <Link to="/poems">Poems</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
