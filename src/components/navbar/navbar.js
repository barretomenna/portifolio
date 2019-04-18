import React, { Component } from 'react';
import './navbar.scss';

export default class NavBar extends Component {

    render() {
        return (
            <div className="navbarContainer">
                <section>
                    <i class="nes-ash"></i>
                </section>

                <nav className="navbar">
                    <a>skills</a>
                    <a>Sobre</a>
                </nav>

                <section>
                    <i class="nes-charmander"></i>
                </section>
            </div>
        );
    }
}
