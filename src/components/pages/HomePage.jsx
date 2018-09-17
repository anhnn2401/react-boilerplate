import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MainLayout} from 'components/layouts';

class HomePage extends Component {
  render() {
    return (
      <MainLayout>
        <div>
          this is HomePage <Link to='/login'>FrontPage</Link>
        </div>
      </MainLayout>
    );
  }
}

export default HomePage
