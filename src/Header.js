import React, { Component } from 'react';
import rooterLogo from './img-logo/img-logo.png';
import AppBar from 'material-ui/AppBar';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import HeaderRight from './HeaderRight';

const RooterIMG = () => 
    <div>
        <IconButton><NavigationMenu color={white}/></IconButton>
        <img style={{ marginLeft: '5px' }} height='25rem' src={rooterLogo} style={{ objectFit: 'contain' }}/>
    </div>

class Header extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', top: '0' }}>
                <AppBar
                    title=''
                    iconElementLeft={<RooterIMG />}
                    iconElementRight={<HeaderRight coinsCount={3} passionScore={6} />}
                    style={{ backgroundColor: 'rgb(50,110,117)' }}
                />
            </div>
        );
    }
}

export default Header;