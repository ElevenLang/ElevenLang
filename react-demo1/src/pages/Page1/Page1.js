import React, {Component} from 'react';
import './Page1.css';
import './Page1.scss';
import image from './images/1.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box"> 
                this is Page11111~
                <p>hello</p>
                <img src={image}/>
            </div>
        )
    }
}