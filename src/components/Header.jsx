import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;