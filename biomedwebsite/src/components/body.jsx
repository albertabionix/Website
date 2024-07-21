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

    const handleClick = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSc1HNtgYHIoqKi_pQI45CvOzvXrXaL662bOK0XVhI5QcLheGg/viewform', '_blank');
      };
    
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
                        <button className='joinusbutton' onClick={handleClick}>Join Us</button>
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
                <div class="waves_top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="waves_bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
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