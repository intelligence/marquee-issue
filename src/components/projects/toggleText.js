import React from 'react';
import styles from '../../styles/projects/toggleText.module.css';

//export default ({ summary, details }) => {
export default class Navbar extends React.Component {

  state = { showExtended: false }

  toggleExtended = () => {
    this.setState({
      showExtended: !this.state.showExtended
    })
  }

  render() {

    //console.log(this.props);
    const isExtendedClass = this.state.showExtended ? `${styles.isExtended}` : '';

    return (
      <div className="section section-toggleText">
        <div className="section-padding">
          <div className={styles.content}>
            <div className={`${styles.summary} ${isExtendedClass}`}>
              {this.props.summary} <span className={styles.readMore} onClick={this.toggleExtended}>Read more</span>
              <div className={styles.details}>
                <div className={styles.inner}>
                  {this.props.details} <span className={styles.readLess} onClick={this.toggleExtended}>Read less</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
