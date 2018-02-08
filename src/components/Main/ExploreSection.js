import React from 'react';

import PolygonBottom from '../Separator/PolygonBottom';
import PolygonTop from '../Separator/PolygonTop';

const ExploreSection = () => (
  <section id="explore" className="hero is-primary">
    <PolygonTop />
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
            <div className="phone-frame-section phone-frame-shadow">
              <figure className="image">
                <img
                  src="img/screenshots/explore-dish-map-pizza-small.png"
                  alt="WeEat - explore map phone screen"
                  className="phone-screen-section"
                />
              </figure>
            </div>
          </div>

          <div className="column">
            <br />
            <h1 className="title is-3">A better way to discover food</h1>
            <br />
            <h2 className="subtitle has-more-line-space">
              It’s good to know what to eat - not only where to eat. Now it is
              possible to find the best rated meals around you.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <PolygonBottom />
  </section>
);

export default ExploreSection;
