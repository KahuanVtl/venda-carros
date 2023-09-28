import './Footer.css';
import logo from '../../Images/Icone.svg';

function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-lista'>
                    <ul className='footer-ul'>
                        <a className='footer-li' href='/'><li>Comprar</li></a>
                        <a className='footer-li' href='/'><li>Vender</li></a>
                        <a className='footer-li' href='/'><li>Contate</li></a>
                        <a className='footer-li' href='/'><li>Nos conheça</li></a>
                        <a className='footer-li' href='/'><li>Ajude-me</li></a>
                    </ul>
                </div>
                <div className='footer-logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='footer-bolha-container'>
                    <div className='footer-bolha'>
                        <h2>New Motors</h2>
                        <p>Qualidade, Variedade e Experiência Excepcional.</p>
                    </div>
                    <div className='footer-bolha'>
                        <h2>Valores</h2>
                        <p>Excelência, Integridade e Inovação.</p>
                    </div>
                </div>
            </div>

            <div className='footer-copyright'>
                <p>Todos os Direitos Reservados a Kahuan Vitelli</p>
            </div>
        </div>
    )
}

export default Footer;