import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Navbar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div class="navbar bg-base-100">
        <Link class="flex-1" to="/">
          <a class="btn btn-ghost normal-case text-xl">RavenEmotion</a>
        </Link>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            {currentUser ? (
              <button onClick={signOutUser}> Sign Out</button>
            ) : (
              <li>
                <Link to="/auth">Sign In</Link>
              </li>
            )}
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
