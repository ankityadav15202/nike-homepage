import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
        <nav>
        <div className="logo">
            <img className="logoimg" src="./images/logo.png" alt="logo" />
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                </li>
            <li>
            <Link to='./Contact'>Contact</Link>
            </li>
            <li>
            <Link to='./About'> About </Link>
                </li>
            <li href="#">Contact</li>
        </ul>
            <button>Login</button>
        </nav>
        </>
    )
}

export default Nav