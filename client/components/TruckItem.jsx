// TruckItem: the individual tweets that will appear on the page

import React from 'react';

export default () => {
  return (
    <div className="TruckItem">
      <div className="tweet col-lg-offset-3 col-sm-6 col-md-6 col-lg-6">
        <img className="TruckAvatar" src={this.props.truck.imageUrl} alt="Truck Image" />
        <div>
          <h4 className="TruckName">{this.props.truck.name}</h4>
          <h6 className="TruckHandle">{this.props.truck.handle}</h6>
        </div>
        <p className="TruckDescription">{this.props.truck.description}</p>
        <h5 className="TruckTweet"> {this.props.truck.message}</h5>
        <div className="TruckTimeStamp">{this.props.truck.timeStamp}</div>
      </div>
    </div>
  );
};