import React, {Component} from 'react';
import './skillBar.scss';

export default class SkillBar extends Component {

    render(){

        var {skillName, value} = this.props;
        
        return(
            <div className="skillBarContainer">
                <span className="skillName">{skillName}</span>
                <progress class="nes-progress is-success bar" value={value} max="100"></progress>
            </div>
        )
    }
}