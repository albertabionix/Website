import React from "react"
import '../styles/team.css'
import teamm from "../data/team.json"

const team = teamm["team"];
// const images = importAll(require.context('../images/team_images', false, /\.(png|jpe?g|svg)$/));


const getMemberContent = team => {
    let content = [];
    for (let member of team) {
        // let hs = arden//images[member["image"]];
        // <img className="headshot" src={hs}></img>
        content.push(<div className="column"><div className="card"><div className="container"><h2 className="name">{member["name"]}</h2><h2 className="role">{member["position"]}</h2><p className="description">{member["description"]}</p></div></div></div>);
    }
    return content;
  };

export default function Team() {
   
    return (
        <div className="team">
            <div className="row">
                {getMemberContent(team)}
            </div>
        </div> 
    );
}