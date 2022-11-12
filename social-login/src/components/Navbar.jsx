import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
      <Link to='/' className='link'>
        <span className='logo'>Social Login</span>
      </Link>
      {user ? (
        <ul className='list'>
          <li className='listItem'>
            <img
              src='https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png'
              alt=''
              className='avatar'
            />
          </li>
          <li className='listItem'>John Doe</li>
          <li className='listItem'>Logout</li>
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
