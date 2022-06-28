import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItineraryHistoryList from '../History/ItineraryHistoryList';

const activeUrl = 'https://goomtaxibackendapi.herokuapp.com/api/v1';

export default class MAP extends Component {
  componentDidMount() {
    let mainNav;
    if (document.getElementById('loggedInOnly')) {
      mainNav = document.getElementById('loggedInOnly');
      mainNav.style.display = 'block';
      mainNav.style.opacity = 1;
    }
  }

  render() {
    const style1 = {
      visibility: 'hidden',
      display: 'none',
    };

    return (
      <div className="content-page">
        <div className="content" id="spread-out">
          <div className="container" id="faqs">
            <main className="container-map">
              <div id="map" className="map"></div>
              <p id="info" className="info"></p>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
