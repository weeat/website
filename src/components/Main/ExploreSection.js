import React from 'react';

const ExploreSection = () => (
  <section id="explore" className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="phone-frame-section phone-frame-shadow">
              <figure className="image">
                <img
                  src="img/screenshots/explore-dish-map-pizza-small.png"
                  alt="WeEat phone screen"
                  style={{
                    height: '400px',
                    width: '232px',
                    marginTop: '48px'
                  }}
                />
              </figure>
            </div>
          </div>

          <div className="column">
            <br />
            <h1 className="title is-3">A better way to discover food</h1>
            <br />
            <h2 className="subtitle has-more-line-space">
              It’s good to know what to eat not only where to eat. Now it is
              possible to find the best rated meals around you.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExploreSection;
