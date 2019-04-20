import React, { Component } from 'react';
import './navbar.scss';

export default class NavBar extends Component {

    render() {
        return (
            <div className="navbarContainer">
                <section>
                    <i className="nes-ash"></i>
                </section>

                <nav className="navbar">
                    <a>skills</a>

                    <div className="profileField">
                        <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png" />
                        <span>Rafael Barreto</span>
                    </div>

                    <a>Sobre</a>
                </nav>

                <section>
                    <i className="nes-charmander"></i>
                </section>
            </div>
        );
    }
}
