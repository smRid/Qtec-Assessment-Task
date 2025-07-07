import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="fixed-nav-bar w-nav">
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
                <ul className="nav__links">
                    <li className="link"><Link to="/">Home</Link></li>
                    <li className="link"><Link to="/shop">Shop</Link></li>
                    <li className="link"><Link to="/">Pages</Link></li>
                    <li className="link"><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Logo */}
                <div className="nav__logo">
                    <Link to="/"> Marketopia </Link>
                </div>

                {/* Nav Icons */}
                <div className="nav__icons relative">
                    <span>
                        <Link to="/search">
                         <i className="ri-search-line"></i>
                        </Link>
                    </span>
                    <span>
                        <button className="hover:text-primary">
                            <i className="ri-shopping-cart-line"></i>
                            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">0</sup>
                        </button>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;