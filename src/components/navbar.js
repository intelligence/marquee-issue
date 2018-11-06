import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/navbar.module.css';
import NavbarMarquee from './newsMarquee';

const topLevelNav = [
  {
    href: '/news',
    label: <NavbarMarquee/>,
    extraClass: styles.navLinkNews,
    mediaQueryClass: styles.navLinkHiddenSmall,
  },
];

export default class Navbar extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {

    const menuActive = this.state.showMenu ? `${styles.isActive}`: '';
    const burgerActive = this.state.showMenu ? `${styles.isActive}` : '';
    const menuItemsHidden = this.state.showMenu ? `${styles.isHidden}` : '';

    return (
      <div>
        <header className={styles.navbar} role="banner">
          <nav className={styles.nav}>

            <div className={`${styles.navLink__toggleMenu} ${burgerActive}`} onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {topLevelNav.map(({ href, label, extraClass = '', mediaQueryClass = '' }) => (
              <Link
                key={label}
                to={href}
                className={`${styles.navLink} ${extraClass} ${mediaQueryClass} ${menuItemsHidden}`}
                activeClassName={styles.navLinkActive}
              >
                {label}

              </Link>
            ))}



          </nav>
        </header>

        <div className={`${styles.extendedMenu} ${menuActive}`} >

        </div>
      </div>
    )
  }
}