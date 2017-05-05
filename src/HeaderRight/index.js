import React, { Component } from 'react';
import CoinPng from './images/icon-coins/icon-coins.png';
import NotifPng from './images/icon-notifications/icon-notifications.png';
import  './styles.css';

const CoinImg = <img src={CoinPng} style={{ height: '24px', objectFit: 'contain' }} />
const NotifImg = <img src={NotifPng} style={{ height: '50px', objectFit: 'contain' }} />

class HeaderRight extends Component {
    render() {
        return (
            <div className='NavContainer'>
                <div className='Base'>
                </div>
                <div className='Base'>
                    <p style={{ marginLeft: '10px', color: '#fff' }} >{this.props.coinsCount}</p>
                    {CoinImg}
                </div>
                {NotifImg}
            </div>
        );
    }
}


export default HeaderRight;