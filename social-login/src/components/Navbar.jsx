import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className='navbar'>
      <Link to='/' className='link'>
        <span className='logo'>Social Login</span>
      </Link>
      {user ? (
        <ul className='list'>
          <li className='listItem'>
            <img src={user.photos[0].value} alt='' className='avatar' />
          </li>
          <li className='listItem'>{user.displayName}</li>
          <li className='listItem' onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to='/login' className='link'>
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
