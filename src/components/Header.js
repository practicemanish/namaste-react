import {useEffect, useState, useContext} from 'react';
import logo from '../burger.png';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux';
import {FaBars, FaTimes, FaShoppingCart} from 'react-icons/fa';

const Header = () => {
  const {loggedInUser} = useContext (UserContext);
  useEffect (() => {});
  // let btnName = "Login";
  const [btnName, setbtnName] = useState ('login');
  const onlineStatus = useOnlineStatus ();
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  const cartItems = useSelector (store => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Order Food"
            className="w-12 h-12"
            width="100px"
          />
          <span className="text-4xl font-bold text-orange-600">Foodie</span>
        </Link>
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen (!isMenuOpen)}
        >

          {isMenuOpen ? <FaTimes /> : <FaBars />}

        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <div className="flex items-center">
            <ul className="flex items-center space-x-6 text-gray-700 font-medium">
              <li>
                Online Status:{onlineStatus ? '🟢' : '🔴'}
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-orange-600 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-600 transition-colors"
                >
                  Contact us{' '}
                </Link>
              </li>
              <li>
                <Link
                  to="/grocery"
                  className="hover:text-orange-600 transition-colors"
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link to="/cart" className="relative flex items-center">
                  {/* Cart- ({cartItems.length} items) */}
                  Cart
                  <FaShoppingCart size={22} className="text-gray-600" />
                  {cartItems.length > 0 &&
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {cartItems.length}
                    </span>}
                </Link>
              </li>
              <li className="font-bold text-gray-800">{loggedInUser}</li>
              <li>
                <button
                  className="px-6 py-2 rounded-lg font-semibold shadow-md transition-colors 
             bg-orange-600 text-white hover:bg-orange-700 active:scale-95"
                  onClick={() => {
                    btnName === 'login'
                      ? setbtnName ('logout')
                      : setbtnName ('login');
                    console.log ('btn is clicked');
                  }}
                >
                  {btnName}
                </button>{' '}
              </li>
            </ul>

          </div>
        </nav>
      </div>
      {/* Mobile Menu (Only Visible when isOpen = true ) */}
      {isMenuOpen &&
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen (false)}> Home </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen (false)}>
                About{' '}
              </Link>

            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen (false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/grocery" onClick={() => setIsMenuOpen (false)}>
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen (false)}
                className="relative flex items-center"
              >
                <FaShoppingCart size={22} className="text-gray-700" />
                {cartItems.length > 0 &&
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>}
                <span className="ml-2">Cart</span>
              </Link>
            </li>
            <li className="font-semibold"> {loggedInUser}</li>
            <li>
              <button
                onClick={() => {
                  setbtnName (btnName === 'Login' ? 'Logout' : 'Login');
                  setIsMenuOpen (false);
                }}
                className="w-full px-5 py-2 rounded-lg font-semibold shadow-md transition-all
            bg-orange-400 text-white hover:bg-orange-400 active:scale-95"
              >

                {btnName}

              </button>
            </li>

          </ul>

        </div>}

    </header>
  );
};

export default Header;
