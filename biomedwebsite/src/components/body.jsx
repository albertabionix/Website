import '../styles/body.css'
import gear_photo from '../images/gear_photo.jpeg'
export default function Body() {

    return (
        <div className='intro' style={{ backgroundImage: `url(${gear_photo})` }}>
            {/* <img className='gearphoto' src={gear_photo} /> */}
            <div className='titlecontact'>
                <h1 className='name'>ALBERTA BIONIX</h1>
                <p className='school'>University of Alberta Bionix Technologies Development Group</p>
            </div>
            <div className='contact_buttons'>
                <button className='contactusbutton'>Contact Us</button>
                <button className='joinusbutton'>Join Us</button>
            </div>
        </div>

    )
}