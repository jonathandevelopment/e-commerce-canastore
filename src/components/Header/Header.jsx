import headerImage from '../../assets/headerbg.jpg';

const Header = (props) => {
    return(
        <div 
        style={{backgroundImage: `url(${headerImage})` }}
        className="h-80  bg-cover bg-center">
            <div className='w-full h-full flex bg-black bg-opacity-50'>
                <div className="px-4 container m-auto text-white">
                    <h1 className="text-3xl font-semibold ">{ props.title }</h1>
                    <h2 className="text-xl font-semibold ">{props.subtitle}</h2>
                </div>  
            </div>
        </div>
    )
}

export default Header;