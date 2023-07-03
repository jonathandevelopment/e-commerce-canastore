import logo from '../logo.svg';

function Navbar(props) {
        return(
            <div>
                <div 
                className='bg-red-200'>
                    <img src={logo} width={80} height={80} alt="My Image" />
                    <ul 
                    className='bg-blue-300'>
                        <li ><a className='text-white' href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

            </div>
        );

}

export default Navbar;