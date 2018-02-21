import React, { Component } from 'react';
import Link from 'gatsby-link';

import EmailSection from '../components/Main/EmailSection';
import ExploreSection from '../components/Main/ExploreSection';
import IntroSection from '../components/Main/IntroSection';
import SocialSection from '../components/Main/SocialSection';
import VisualSection from '../components/Main/VisualSection';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <IntroSection />
        <ExploreSection />
        <SocialSection />
        <VisualSection />
        <EmailSection />
      </div>
    );
  }
}

export default IndexPage;
