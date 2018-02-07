import React from 'react';

const IntroSection = () => (
  <section id="home" className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-6 is-offset-1">
            <div className="has-text-left">
              <h1 className="title is-3 is-spaced has-text-primary">
                Explore, Discover, Eat and Share
              </h1>
              <h2 className="subtitle is-5 has-more-line-space">
                WeEat is a social and visual guide to explore finest meals and
                places in your area, with the possibility of sharing your
                experience among your friends and foodies community.
              </h2>
            </div>
            <br />
            <p className="has-text-centered">
              <a className="button is-medium is-primary is-outlined">
                Google Play
              </a>
            </p>
          </div>

          <div className="column is-5">
            <div className="phone-frame-intro">
              <figure className="image">
                <img
                  src="img/screenshots/explore-dish-list-pizza-small.png"
                  alt="WeEat phone screen"
                  style={{
                    height: '498px',
                    width: '288px',
                    marginTop: '84px'
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
