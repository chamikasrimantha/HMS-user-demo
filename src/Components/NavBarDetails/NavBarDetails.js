import './NavBarDetails.css'
import { useNavigate } from 'react-router-dom'

function NavBarDetails() {

    const navigate = useNavigate();

    const home = () => {
        navigate("/main")
    }

    const medicine = () => {
        navigate("/medicine")
    }

    const channelling = () => {
        navigate("/details")
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark navbar11">
                <div class="container-fluid">
                    <a href='' class="navbar-brand dd">EASY Health Care Medical Center</a>
                    <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button onClick={home} class="btn  btn-light ffx1" type="submit">Back to Home</button>
                        <button onClick={channelling} class="btn  btn-light ffx1" type="submit">Channelling</button>
                        <button onClick={medicine} class="btn  btn-light ffx1" type="submit">Buy Medicine</button>
                        {/* <button class="btn  btn-light ffx1" type="submit">Search</button>
                        <button class="btn  btn-light ffx1" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBarDetails;