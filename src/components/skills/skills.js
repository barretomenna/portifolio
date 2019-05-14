import React , {Component} from 'react';
import SkillBar from './skillBar/skillBar';

import './skills.scss'

export default class Skills extends Component {
    
    render(){
        return(
            <div className="skillsContainer">
                <div className="skillsItens">
                    <div className="nes-container is-rounded languages">
                        <span className="title"> Linguagens </span>
                        <SkillBar skillName="C#" value="70" />
                        <SkillBar skillName="JavaScript" value="80" />
                        <SkillBar skillName="Python" value="50" />
                        <SkillBar skillName="Java" value="70" />
                    </div>
                    <div className="nes-container is-rounded frameworks">
                        <span className="title"> Frameworks </span>
                        <SkillBar skillName="Sql Server" value="60" />
                        <SkillBar skillName="Angular" value="90" />
                        <SkillBar skillName="Vue" value="90" />
                        <SkillBar skillName="React" value="90" />
                        <SkillBar skillName="React Native" value="70" />
                        <SkillBar skillName="Ionic" value="70" />
                    </div>
                    
                </div>
            </div>
        )
    }
}