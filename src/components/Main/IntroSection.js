import React from 'react';

import EmailSubscribeForm from '../EmailSubscribeForm';

const IntroSection = () => (
  <section id="home" className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
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
            <br />

            <EmailSubscribeForm />
            <br />
          </div>

          <div className="column">
            <div className="phone-frame-intro phone-frame-shadow">
              <figure className="image">
                <img
                  src="img/screenshots/explore-dish-list-pizza-social-small.png"
                  alt="WeEat phone screen"
                  style={{
                    height: '510px',
                    width: '296px',
                    marginTop: '61px'
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
