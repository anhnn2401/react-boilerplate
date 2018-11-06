import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layouts';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <MainLayout>
        <div>
          123456
        </div>
        {/* <div>
          asdasdasd<Link to='/login'>123</Link>
        </div> */}
      </MainLayout>
    );
  }
}

export default HomePage
