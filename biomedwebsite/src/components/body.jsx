import '../styles/body.css'
import gear_photo from '../images/gear_photo.jpeg'
import mission1 from '../images/mission1.jpg'
import mission2 from '../images/mission2.jpg'
export default function Body() {

    return (
        <div className='body'>
            <div className='intro_body' style={{ backgroundImage: `url(${gear_photo})` }}>
                <div className='introandcontact'>
                    <div className='titlecontact'>
                        <h1 className='name'>ALBERTA BIONIX</h1>
                        <p className='school'>University of Alberta Bionix Technologies Development Group</p>
                    </div>
                    <div className='contact_buttons'>
                        <button className='contactusbutton'>Contact Us</button>
                        <button className='joinusbutton'>Join Us</button>
                    </div>
                </div>
            </div>

            <div className='misson_body'>
                <div className='mission_text_div'>
                    <h1 className='mission_title'>Our Mission</h1>
                    <p className='mission_desc'>To foster an environment that encourages learning and innovation. With interdisciplinary solutions and collaboration amongst researchers, healthcare professionals, and non-for-profit organizations, UABiomed strives to create a more physiologically inclusive world through the development of accessibility technologies.</p>
                </div>
                <div className='mission_photo_div'>
                    <img src={mission1}></img>
                    <img src={mission2}></img>
                </div>
            </div>
        </div>

    )
}