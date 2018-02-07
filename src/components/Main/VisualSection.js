import React from 'react';

const VisualSection = () => (
  <section id="visual" className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="phone-frame-section">
              <figure className="image">
                <img
                  src="img/screenshots/dish-screen-small.png"
                  alt="WeEat phone screen"
                  style={{
                    height: '376px',
                    width: '217px',
                    marginTop: '63px'
                  }}
                />
              </figure>
            </div>
          </div>

          <div className="column">
            <br />
            <h1 className="title is-3">See what you are going to eat</h1>
            <br />
            <h2 className="subtitle has-more-line-space">
              We eat with our eyes. If you like the way the foods looks like,
              you’re probably gonna love its taste.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisualSection;
