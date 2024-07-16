import React from "react"
import '../styles/projects.css'
import in_development from '../images/in_development.png'
import medication_manager from '../images/smart_medication_monitor.png'
import exo_arm from '../images/exo_arm.jpeg'

export default function Projects() {

    return (
        <div className="projects">
            <div className="current_projects_group">
                <div className="proj_intro">
                    <h1>Current Projects</h1>
                    <p>A look at our current projects in development.</p>
                </div>
                <div className="proj_details_group">
                    <div className="proj_details">
                        <h1>EXO 2.0</h1>
                        <h2>2023 – Present</h2>
                        <p>A lower-limb robotic rehabilitation exoskeleton with brain-computer interface (BCI) integration intended to provide locomotive assistance device for people with complete motor dysfunction.</p>
                    </div>
                    <div className="proj_img">
                        <img src={in_development}></img>
                    </div>
                </div>
            </div>

            <div className="past_projects">
                <div className="smart_medication_manager">
                    <div className="proj_intro">
                        <h1>Past projects</h1>
                        <p>A look at our past projects throughout the years.</p>
                    </div>
                    <div className="proj_details_group">
                        <div className="proj_details">
                            <h1>Smart Medication Manager</h1>
                            <h2>2022 – 2023</h2>
                            <p>Designed to eliminate the human error of remembering to take a specified dosage of medication. The device tracks medication type and dosage dispensed to ensure the user receives the correct intake. It consists of three subsystems: a pill dispensing mechanism, a user interface (UI), and input/output (I/O) controls.</p>
                            <p>The medication manager was submitted to the 2023 James Dyson Award Competition. Click the button below to learn more about our submission!</p>
                            <button>2023 james Dyson Award Submission</button>
                        </div>
                        <div className="proj_img">
                            <img src={medication_manager}></img>
                        </div>
                    </div>
                </div>

                <div className="current_projects_group">
                    <div className="alex_exo">
                        <div className="proj_details">
                            <h1>ALEX Exoskeleton</h1>
                            <h2>2018 – 2021</h2>
                            <p>ALEX (ALberta EXoskeleton) is designed to supplement upper body strength and provide posture support. ALEX’s primary use is in working environments where repetitive lifting motions (i.e., stocking warehouses) are involved. This project’s focus was to prevent stress/strain-related injuries in the upper body.</p>
                        </div>
                        <div className="proj_img">
                            <img src={exo_arm}></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}