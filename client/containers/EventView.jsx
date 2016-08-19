import React, { Component } from 'react';
import TruckList from './TruckList.jsx';
import {Link} from "react-router";
import {Router, Route, hashHistory} from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventProfile from './EventProfile.jsx';
import TruckImageContainer from '../components/TruckImageContainer.jsx';
import { FetchYelp } from '../actions/FetchYelp';
import { FetchFiveTweets } from '../actions/FetchFiveTweets';

class EventView extends Component {

  componentWillMount(){
    this.props.FetchYelp(this.props.params.truckName)
  }

  renderEventView(event, fiveTweets){
    return <EventProfile key={ event.yelpBizID } yelpInfo ={ event } fiveTweets = { fiveTweets } />
  }

  render(){
    return (
      <div className="body-truck-view">
        <link href="https://cdn.auth0.com/styleguide/4.8.6/index.min.css" rel="stylesheet" />
        <Header />
        {this.renderEventView(this.props.yelpInfo, this.props.yelpInfo.fiveTweetObjs)}
        <Footer />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    yelpInfo: state.yelpInfo,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ FetchYelp, FetchFiveTweets }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EventView);
