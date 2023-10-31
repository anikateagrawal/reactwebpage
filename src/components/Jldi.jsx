import './Jldi.scss';
import t2 from '../assets/t2.png';

const Jldi = () => {
    return (
        <div>
            <div className='jl'>
                <div className="carousel">
                    <div className="tags">
                        <h1 className='j'>Full Control Over Team.</h1>
                        <div className="ttag">
                            <input type="radio" className='hd' name="bss" id="board" defaultChecked />
                            <label htmlFor='board' className="tagg" >
                                <div className="head">Boards</div>
                                <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                                </div>
                            </label>

                        </div>
                        <div className="ttag">
                            <input type="radio" className='hd' name="bss" id="list" />
                            <label htmlFor='list' className="tagg">
                                <div className="head">Lists</div>
                                <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                                </div>
                            </label>
                        </div>
                        <div className="ttag">
                            <input type="radio" className='hd' name="bss" id='card' />
                            <label htmlFor='card' className="tagg">
                                <div className="head">Cards</div>
                                <div className="con">Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”
                                </div>
                            </label>

                        </div>
                    </div>
                    <div className="car" style={{ backgroundImage: `url(${t2})` }}>

                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Jldi