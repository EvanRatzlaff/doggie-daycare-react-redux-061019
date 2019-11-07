import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
     render() {
        return(
            <nav className="indigo lighten-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Doggie Daycare App</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/pets/new">New Dog</Link></li>
                        <li><Link to="/pets">Current Dogs</Link></li>
                    </ul>
                </div>
                
            </nav>
        
        )
     }
}

export default Nav;

