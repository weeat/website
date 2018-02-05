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
                <br />
                <h1 className="title is-3">See what you are going to eat</h1>
                <br />
                <h2 className="subtitle">
                  We eat with our eyes. If you like the way the foods looks
                  like, you’re probably gonna love its taste.
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
