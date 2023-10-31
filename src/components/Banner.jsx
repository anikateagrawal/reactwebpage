import './Banner.scss';
import iso from '../assets/iso.png';
import si from '../assets/si.png';

const Banner = () => {
  return (
    <div className='Banner'>
        <main>
            <div className="home">
                <h1>
                    <img src={iso} alt="iso" />
                </h1>
                <h1 className='mtext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellat.
                </h1>
                <p className='stext'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo magnam cumque iste iure, incidunt itaque atque odit veniam libero?
                </p>

                <div className="btns">
                    <div className="b1 b">
                        Try Now
                    </div>
                    <div className="b1 b">
                        Contact Us
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={si} alt=""  height="100%" width="100%"/>
            </div>
            
        </main>
    </div>
  )
}

export default Banner