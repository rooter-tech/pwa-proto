import React, { Component } from 'react';
import rooterLogo from './img-logo/img-logo.png';
import AppBar from 'material-ui/AppBar';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

const RooterIMG = () => 
    <div>
        <IconButton><NavigationMenu color={white}/></IconButton>
        <img style={{ marginLeft: '5px' }} height='25rem' src={rooterLogo} style={{ objectFit: 'contain' }}/>
    </div>

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title=''
                    iconElementLeft={<RooterIMG />}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        );
    }
}

export default Header;