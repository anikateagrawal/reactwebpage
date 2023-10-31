
import './Nav.scss';

const Nav = () => {
  return (
    <div>
        <nav className='nav1'>
            <h1 className="logo">
                Esa Link
            </h1>
            <div>
                <ul className="navbar1">
                    <li className='li1'><button className='b2'>
                        Webinar 2024
                    </button></li>
                    <li className='li1'>Expertise</li>
                    <li className='li1'>Solutions</li>
                    <li className='li1'>Services</li>
                    <li className='li1'>Blog</li>
                </ul>
            </div>
            <div >
                <ul className="side">
                    <li className='li1'>Connection</li>
                    <li className='li1'><button className='b1'>Demo</button></li>
                    <li className='li1'>En</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav