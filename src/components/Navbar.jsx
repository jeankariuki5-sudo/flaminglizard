import { Link } from "react-router-dom";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))


    const handleLogout = () => {
        navigator('login')
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to='/'>Flaming Lizard</Link>
            <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id='navbarCollapse'>
                <div className="navbar-nav">
                    <Link className="nav-link" to='/'>menu</Link>
                    <Link className="nav-link" to='/addmeal'>Add meal</Link>
                </div>



                {user ? (<div className="navbar-nav ms-auto">
                    <Link className="nav-link" to='#'>{user.username}</Link>
                    <button className="btn btm-dark">Log Out</button>
                </div>
                ) : (<div className="navbar-nav ms-auto">
                    <Link className="nav-link" to='/login'>Login</Link>
                    <Link className="nav-link" to='/signup'>Sign Up</Link>
                </div>
                )}
            </div>

        </nav>
    );
}

export default Navbar;