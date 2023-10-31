import './Trello.scss';
import t1 from '../assets/t1.png';

const Trello = () => {
  return (
    <div className='trello'>
        <h4>Trello 101</h4>
        <h1>A productivity powerhouse</h1>
        <p>
        Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for getting started.
        </p>
        <div className="carousel">
            <div className="tags">
                <div className="ttag">
                <input type="radio" className='hd' name="bs" id="boards" defaultChecked />
                <label htmlFor='boards' className="tag" >
                    <div className="head">Boards</div>
                    <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                    </div>
                </label>
                
                </div>
                <div className="ttag">
                <input type="radio" className='hd' name="bs" id="lists" />
                <label htmlFor='lists' className="tag">
                    <div className="head">Lists</div>
                    <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                    </div>
                </label>
                </div>
                <div className="ttag">
                <input type="radio" className='hd' name="bs" id='cards' />
                <label htmlFor='cards' className="tag">
                    <div className="head">Cards</div>
                    <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                    </div>
                </label>
                
                </div>
            </div>
            <div className="car" style={{ backgroundImage: `url(${t1})` }}>

            </div>
        </div>
    </div>
  )
}

export default Trello