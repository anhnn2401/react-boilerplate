// import React from 'react';
// // import {Link} from 'react-router';
// import { connect } from 'react-redux';
// // import cookie from 'react-cookie';
// import Header from './Header';
// import ASide from './ASide';
// import { withRouter } from 'react-router';

// class MainLayout extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     // if (typeof cookie.load('accessToken') === 'undefined') {
//     //   this.props.history.push('/login');
//     // }
//     this.state = {
//       contentWrapperMinHeight: 0
//     }
//   }

//   setContentWrapperMinHeight(height) {
//     this.setState({
//       contentWrapperMinHeight: window.innerHeight - height
//     });
//   }

//   render() {
//     const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));

//     return (
//       <div className="wrapper">
//         <Header isStaff={this.props.isStaff} setContentWrapperMinHeight={this.setContentWrapperMinHeight.bind(this)} />
//         <ASide isStaffMenu={this.props.isStaffMenu} active={this.props.active} isStaff={this.props.isStaff} isBooking={this.props.isBooking} />
//         <div className="content-wrapper" style={{ minHeight: this.state.contentWrapperMinHeight }}>
//           {childrenWithProps}
//         </div>
//       </div>
//     );
//   }
// }

// MainLayout.defaultProps = {
//   isBooking: false
// }

// export default connect()(withRouter(MainLayout));
