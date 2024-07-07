import '../styles/body.css'
import gear_photo from '../images/gear_photo.jpeg'
import mission1 from '../images/mission1.jpg'
import mission2 from '../images/mission2.jpg'
import in_development from '../images/in_development.png'
import medication_manager from '../images/smart_medication_monitor.png'
import exo_arm from '../images/exo_arm.jpeg'
import action2 from '../images/action2.png'
import action1 from '../images/action1.png'
import workshop from '../images/workshop.png'
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
                <div className='mission_group'>
                    <div className='mission_text_div'>
                        <h1 className='mission_title'>Our Mission</h1>
                        <p className='mission_desc'>To foster an environment that encourages learning and innovation. With interdisciplinary solutions and collaboration amongst researchers, healthcare professionals, and non-for-profit organizations, UABiomed strives to create a more physiologically inclusive world through the development of accessibility technologies.</p>
                    </div>
                    <div className='mission_photo_div'>
                        <div className='mission1_div'>
                            <img src={mission1} className='mission1'></img>
                        </div>
                        <div className='mission2_div'>
                            <img src={mission2} className='mission2'></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='past_present_projects_body'>
                <div className='project_group'>
                    <h1 className='pastpresent_title'>Our Past & Present Projects</h1>
                    <div className='project_slide'>
                        <div className='prosthetic_leg' style={{ backgroundImage: `url(${in_development})` }}>
                            {/* <img className='project1' style={{ backgroundImage: `url(${in_development})` }}></img> */}
                            <div className='gradient'>
                                <h1 className='project_name'>BCI Prosthetic Leg</h1>
                                <p className='proj_desc'>A prosthetic leg with brain computer interface. Users would be able to use the leg through brain signals.</p>
                            </div>
                        </div>
                        <div className='medication_manager' style={{ backgroundImage: `url(${medication_manager})` }}>
                            {/* <img src={medication_manager} className='project2'></img> */}
                            <div className='gradient'>
                                <h1 className='project_name'>Smart Medication Manager</h1>
                                <p className='proj_desc'>A device used to facilitate a user’s quality of life through medication management.</p>
                            </div>
                        </div>
                        <div className='exoskeleton' style={{ backgroundImage: `url(${exo_arm})` }}>
                            {/* <img src={exo_arm} className='project3'></img> */}
                            <div className='gradient'>
                                <h1 className='project_name'>ALEX Exoskeleton</h1>
                                <p className='proj_desc'>An upper body exoskeleton designed to reduce repetitive strain injury and provide feedback on a users’s posture.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className='outreach_body'>
                <div className='outreach_group'>
                    <div className='outreach_titles'>
                        <h2>OUR OUTREACH</h2>
                        <h1>Clubs That Care</h1>
                        <p>The Clubs That Care program supports Canadian university and college clubs to build assistive technology. This year, UABiomed participated in the program and assembled multiple types of assistive devices. All of the assembled devices were donated to rehabilitation and occupational therapy centres.</p>
                    </div>
                    <div className='outreach_images'>
                        <img src={action1}></img>
                        <img src={action2}></img>
                        <img src={workshop}></img>
                    </div>
                </div>
            </div>
        </div>

    )
}