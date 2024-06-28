import '../styles/body.css'
import gear_photo from '../images/gear_photo.jpeg'
import mission1 from '../images/mission1.jpg'
import mission2 from '../images/mission2.jpg'
import in_development from '../images/in_development.png'
import medication_manager from '../images/smart_medication_monitor.png'
import exo_arm from '../images/exo_arm.jpeg'
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

            <div className='past_present_projects'>
                <h1>Our Past & Present Projects</h1>
                <div className='project_slide'>
                    <div className='prosthetic_leg'>
                        <img src={in_development}></img>
                        <h1>BCI Prosthetic Leg</h1>
                        <p>A prosthetic leg with brain computer interface. Users would be able to use the leg through brain signals.</p>
                    </div>
                    <div className='medication_manager'>
                        <img src={medication_manager}></img>
                        <h1>Smart Medication Manager</h1>
                        <p>A device used to facilitate a user’s quality of life through medication management.</p>
                    </div>
                    <div className='exoskeleton'>
                        <img src={exo_arm}></img>
                        <h1>ALEX Exoskeleton</h1>
                        <p>An upper body exoskeleton designed to reduce repetitive strain injury and provide feedback on a users’s posture.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}