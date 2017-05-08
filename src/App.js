import React, { Component } from 'react';
import  { authToken } from './constants';
import './App.css';
import Header from './Header';
import BottomNav from './BottomNav';
import axios from 'axios';
import _ from 'lodash';
import MatchCard from './MatchCard';
import { uid } from './utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cricketAciveMatches: [],
    }
    _.bindAll(this, ['fetchMatchInfo']);
  }
  componentDidMount() {
    this.fetchMatchInfo();
  }
  fetchMatchInfo() {
    axios.get('https://first-round.rooter.io/api/Sports/1/matches?type=ACTIVE', {
      headers: {
        Authorization: authToken, 
      }
    }).then((response) => {
      this.setState(() => {
        console.log(response.data);
        return {
          cricketAciveMatches: response.data
        }
      });
    })
  }
  render() {
    const { cricketAciveMatches } = this.state;
    return (
      <div className="">
        <Header />
        <div className='dynamic-content'>
          {
            cricketAciveMatches.length > 0 ?
              cricketAciveMatches.map((match) => <MatchCard key={uid()} matchInfo={match} />)
              :
              undefined
          }
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;
