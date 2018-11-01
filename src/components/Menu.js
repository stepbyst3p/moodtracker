import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <button>Share</button>
                <button>Advices</button>
                <button>Mood History</button>
                <button>My Friends</button>
            </div>
        );
    }
}

export default Menu;