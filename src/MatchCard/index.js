import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import './style.css';


const computeMatchData = (matchInfo) => {
    const homeat0 = matchInfo.teams[0].role === 'home';
    const homeObj = homeat0 ? matchInfo.teams[0]:matchInfo.teams[1];
    const awayObj = homeat0 ? matchInfo.teams[1]:matchInfo.teams[0];
    return {
        ...matchInfo,
        homeObj,awayObj
    }
}
class MatchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchData: computeMatchData(props.matchInfo),
            matchImage: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            matchData: computeMatchData(nextProps.matchInfo)
        });
    }
    
    render() {
        const { matchData, matchImage } = this.state;
        return (
            <Paper zDepth={1} style={{ margin: '5px' }}>
                <div className='match-image-container' style={{ background: `url(${matchData.image})`  }}>
                    <div className='match-info'>
                        <div className='home-team'>
                            <p>{matchData.homeObj.shortName}</p>
                            <p>HOME</p>
                        </div>
                        <img src={matchData.homeObj.image} className='home-image' />
                        <span className='vs-circle'>VS</span>
                        <img src={matchData.awayObj.image} className='away-image' />
                        <div className='away-team'>
                            <p>{matchData.awayObj.shortName}</p>
                            <p>AWAY</p>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}

MatchCard.propTypes = {

};

export default MatchCard;