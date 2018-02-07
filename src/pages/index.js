import React, { Component } from 'react';
import Link from 'gatsby-link';

import IntroSection from '../components/Main/IntroSection';
import VisualSection from '../components/Main/VisualSection';

class IndexPage extends Component {
  renderExplore() {
    return (
      <section id="explore" className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column">
                <figure className="image">
                  <img
                    src="img/phone.png"
                    alt="WeEat phone screen"
                    style={{ height: '500px', width: '245px' }}
                  />
                </figure>
              </div>

              <div className="column">
                <br />
                <h1 className="title is-3">A better way to discover food</h1>
                <br />
                <h2 className="subtitle">
                  It’s good to know what to eat not only where to eat. Now it is
                  possible to find the best rated meals around you.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderSocial() {
    return (
      <section id="social" className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column">
                <br />
                <h1 className="title is-3">
                  Get food tips from your friends, not strangers
                </h1>
                <br />
                <h2 className="subtitle">
                  Most valuable recommendations are from the people we know
                  something about. Check your friends activity and let them help
                  you choose your next delicious meal.
                </h2>
              </div>

              <div className="column">
                <figure className="image">
                  <img
                    src="img/phone.png"
                    alt="WeEat phone screen"
                    style={{ height: '500px', width: '245px' }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div>
        <IntroSection />
        {this.renderExplore()}
        {this.renderSocial()}
        <VisualSection />
      </div>
    );
  }
}

export default IndexPage;
