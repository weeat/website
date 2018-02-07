import React from 'react';

const SocialSection = () => (
  <section id="social" className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
            <br />
            <h1 className="title is-3 has-text-primary">
              Get food tips from your friends
            </h1>
            <br />
            <h2 className="subtitle has-more-line-space">
              Most valuable recommendations are from the people we know. Check
              your friends activity and let them help you choose your next
              delicious meal.
            </h2>
          </div>

          <div className="column">
            <div className="phone-frame-section">
              <figure className="image">
                <img
                  src="img/screenshots/activity-screen-small.png"
                  alt="WeEat phone screen"
                  style={{
                    height: '400px',
                    width: '232px',
                    marginTop: '60px'
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

export default SocialSection;
