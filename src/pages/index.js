import React, { Component } from 'react';
import Link from 'gatsby-link';

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
                <h1 className="title is-2">Value proposition one</h1>
                <h2 className="subtitle">
                  Explain and showcase value proposition one.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderIntro() {
    return (
      <section id="home" className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  Explore, share and enjoy your meal every day
                </h1>
                <h2 className="subtitle is-4">
                  We eat is a community based place, where you can not only
                  explore and rate new food in an ordinary way, but you can also
                  see how every dish in town looks like, share it with your
                  friends and let others help you in the process of getting your
                  everyday meal.
                </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-primary is-outlined">
                    Google Play
                  </a>
                </p>
              </div>

              <div className="column is-5 content">
                <figure className="image">
                  <img
                    src="img/phone.png"
                    alt="WeEat phone screen"
                    style={{ height: '664px', width: '326px' }}
                  />
                </figure>
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
                <h1 className="title is-2">Value proposition two</h1>
                <h2 className="subtitle">
                  Explain and showcase value proposition two.
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

  renderVisual() {
    return (
      <section id="visual" className="hero is-primary">
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
                <h1 className="title is-2">Value proposition three</h1>
                <h2 className="subtitle">
                  Explain and showcase value proposition three.
                </h2>
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
        {this.renderIntro()}
        {this.renderExplore()}
        {this.renderSocial()}
        {this.renderVisual()}
      </div>
    );
  }
}

export default IndexPage;
