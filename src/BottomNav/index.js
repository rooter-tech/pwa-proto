import React, { Component, PropTypes } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ChatPng from './images/tabbar-icon-notifications-inactive/tabbar-icon-notifications-inactive.png';
import ProfilePng from './images/tabbar-icon-profile-inactive/tabbar-icon-profile-inactive.png';
import TourPng from './images/tabbar-icon-connect-inactive/tabbar-icon-connect-inactive.png';
import LivePng from './images/tabbar-icon-live-matches/tabbar-icon-live-matches.png';

const TourImg = <img src={TourPng} width='24px' height='24px' style={{ objectFit: 'contain' }} />
const ChatImg = <img src={ChatPng} width='24px' height='24px' style={{ objectFit: 'contain' }} />

const ProfileImg = <img src={ProfilePng} width='24px' height='24px' style={{ objectFit: 'contain' }} />
const LiveImg = <img src={LivePng} width='24px' height='24px' style={{ objectFit: 'contain' }} />




class BottomNav extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Home"
                        icon={<HomeIcon/>}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Chat"
                        icon={ChatImg}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Tournament"
                        icon={TourImg}
                        onTouchTap={() => this.select(2)}
                    />
                    <BottomNavigationItem
                        label="Profile"
                        icon={ProfileImg}
                        onTouchTap={() => this.select(3)}
                    />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}

BottomNav.propTypes = {

};

export default BottomNav;