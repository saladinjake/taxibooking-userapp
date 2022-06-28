/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './enterprise-version/views/User/Header/Header';
import Footer from './enterprise-version/views/User/Footer/Footer';
import FrontEndApp from './enterprise-version/assets/js/goom_modules/libraries/App';
import BackendApp from './enterprise-version/assets/js/goom_modules/libraries/backend/App';
import '../../public/css/mainstyles.css';
import './App.css';
import $ from 'jquery';

import GoomTaxiServiceRoutes from './enterprise-version/core/routes/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <GoomTaxiServiceRoutes />
        <Footer />
      </div>
    );
  }
}

let frontRunner, backRunner;
const loadingAction = () => {
  document.onreadystatechange = function(e) {
    e.preventDefault();
    if (document.readyState !== 'complete') {
    } else {
      if (!document.getElementById('admin')) {
        new FrontEndApp().run();
      } else {
        new BackendApp().run();
      }
    }
  };
};

document.addEventListener('load', () => {
  $('#loader').animate(
    {
      top: -3500,
    },
    2500,
  );

  setTimeout(() => {
    document.querySelector('#gtd').style.visibility = 'hidden';
    document.querySelector('#gtd').style.opacity = 0;
    document.querySelector('#loader').style.visibility = 'visible';
  }, 2000);
});

$(document).ready(function() {
  if (!document.getElementById('admin')) {
    setTimeout(() => {
      $('#loader').animate({ top: -3500 }, 2500);
    }, 3400);

    document.querySelector('#gtd').style.visibility = 'visible';
    document.querySelector('#gtd').style.opacity = 1;

    setTimeout(
      () => {
        document.querySelector('#gtd').style.visibility = 'visible';
        document.querySelector('#gtd').style.opacity = 1;
      },

      3500,
    );
  } else {
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadingAction();
});

export default App;
