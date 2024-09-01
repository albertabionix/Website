import React from "react"
import '../styles/projects.css'
import in_development from '../images/leg.png'
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
                        <h1>Leg Prosthetic</h1>
                        <h2>2023 – Present</h2>
                        <p>The project aims to deliver a prototype of a leg prosthesis, with working mechanical and electrical systems. Machine learning algorithms will be implemented in future iterations of the leg prosthetic. A strong emphasis of the project is placed on providing members with technical experience in a range of engineering and scientific areas.</p>
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
                            <p>The medication manager was submitted to the 2023 James Dyson Award Competition and made it through the first round.</p>
                        </div>
                        <div className="proj_img">
                            <img src={medication_manager}></img>
                        </div>
                    </div>
                </div>

                <div className="past_projects">
                    <div className="alex_exo">
                        <div className="proj_details_group">
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
        </div>


    )
}