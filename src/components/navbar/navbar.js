import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './navbar.scss';

export default class NavBar extends Component {

    render() {
        return (
            <div className="navbarContainer">
                <section>
                    <i className="nes-ash"></i>
                </section>

                <nav className="navbar">
                    <Link to="/skills" >Skills</Link>

                    <div className="profileField">
                        <img src="https://scontent.fccm1-1.fna.fbcdn.net/v/t1.0-9/48423701_1203298086485877_4906807892943831040_n.jpg?_nc_cat=100&_nc_ht=scontent.fccm1-1.fna&oh=ecfbc307ec9ca834930becc434b3761f&oe=5D372EB4" />
                        <span>Rafael Barreto</span>
                    </div>

                    <Link to="/sobre" >Sobre</Link>
                </nav>

                <section>
                    <i className="nes-charmander"></i>
                </section>
            </div>
        );
    }
}
