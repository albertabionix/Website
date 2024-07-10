import React from "react"
import '../styles/projects.css'
import in_development from '../images/in_development.png'
import medication_manager from '../images/smart_medication_monitor.png'
import exo_arm from '../images/exo_arm.jpeg'

export default function Projects() {

    return (
        <div className="current_projects">
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
        </div>
    )
}