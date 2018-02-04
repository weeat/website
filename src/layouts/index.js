import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
//import './index.css';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div className="has-navbar-fixed-top">
    <Helmet
      title="WeEat App - Explore, Share and Enjoy your meals every day."
      meta={[
        {
          name: 'description',
          content:
            'We eat is a community based place, where you can not only explore and rate new food in an ordinary way, but you can also see how every dish in town looks like, share it with your friends and let others help you in the process of getting your everyday meal'
        },
        { name: 'keywords', content: 'explore, discover, food, meals, social' }
      ]}
    />

    <Header />
    <main>{children()}</main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
