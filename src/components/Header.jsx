import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div>
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <div>
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;