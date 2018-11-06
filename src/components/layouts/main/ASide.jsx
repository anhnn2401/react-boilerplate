import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'base/actions';
import { withRouter } from 'react-router-dom';
import MenuConfig from '../../../constants/MenuConfig';
// import { ShowIf } from 'components/utils';
// import moment from 'moment';

const arrayUrl = {
  'data': [
    '/news',
    '/resources'
  ]
}

class ASide extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    }
  }

  checkactive(index) {
    let isActive = false;
    let Menu = MenuConfig.Admin;
    if (Menu[index] && Menu[index].child.length > 0) {
      Menu[index].child.map((SubItem) => {
        if (location.pathname == SubItem.link) {
          isActive = true;
        }
      });
    }
    if (Menu[index] && Menu[index].link === location.pathname) {
      isActive = true;
    }
    return isActive;
  }

  checkActiveSubmenu(link) {
    let isActive = false;
    if (location.pathname === link) {
      isActive = true;
    }
    return isActive;
  }

  handleLogout(e) {
    e.preventDefault();
    this.state.loading = true;
    let User = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
    this.setState({ ...this.state });
    this.props.dispatch(logout()).then(() => {
      this.props.history.push('/login');
    });
    return;
  }

  onClickMenu(type) {
    this.props.dispatch({ type: type, dataSearch: {} });
  }

  render() {
    let Menu = MenuConfig.Admin;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            {
              Menu.map((Item, i) => {
                return (
                  <li className={`treeview${this.checkactive(i) ? ' active' : ''}${this.props.active && this.props.active.length > 0 && this.props.active[0] == i ? ' active' : ''}`} key={i}>
                    <Link to={Item.link} onClick={this.onClickMenu.bind(this, Item.type)}>
                      <i className={Item.icon ? Item.icon : ''}></i>
                      <span>{Item.menuName} 123</span>
                    </Link>
                    {
                      Item.child && Item.child.length > 0 ? (
                        <ul className="treeview-menu">
                          {
                            Item.child.map((SubItem, j) => {
                              return (
                                <li onClick={this.onClickMenu.bind(this, Item.type)} className={`treeview ${this.checkActiveSubmenu(SubItem.link) ? 'current' : ''} ${this.props.active && this.props.active.length > 1 && this.props.active[0] == i && this.props.active[1] == j ? ' current' : ''}`} key={j}>
                                  <Link to={SubItem.link}>
                                    <i className={SubItem.icon ? SubItem.icon : ''}></i>
                                    <span>{SubItem.menuName}</span>
                                  </Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      ) : null
                    }
                  </li>
                )
              })
            }
            <li className="treeview">
              <Link to="#" className={`has-loading${this.state.loading ? ' loading' : ''}`} onClick={this.handleLogout.bind(this)}>
                <i className="fas fa-sign-out-alt"></i>
                <span>LogOut</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default connect()(withRouter(ASide));
