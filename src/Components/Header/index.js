import './Header.css';
import icone from '../../Images/Icone.svg';
import heart from '../../Images/Heart.svg';
import user from '../../Images/User.svg';
import shop from '../../Images/Shop.svg';


function Header() {
    return (
        <div className="header-container">
            <div className='header-logo'>
                <img src={icone} alt='Imagem da Logo New Motors' />
            </div>
            <div className='header-lista'>
                <ul className='header-ul'>
                    <a href='/' className='header-li'><li>Comprar</li></a>
                    <a href='/' className='header-li'><li>Vender</li></a>
                    <a href='/' className='header-li'><li>Contate</li></a>
                    <a href='/' className='header-li'><li>Nos Conheça</li></a>
                    <a href='/' className='header-li'><li>Ajude-me</li></a>
                </ul>
            </div>
            <div className='header-icones'>
                <img alt='' src={user} />
                <img alt='' src={heart} />
                <img alt='' src={shop} />
            </div>
        </div>
    )
}

export default Header;
