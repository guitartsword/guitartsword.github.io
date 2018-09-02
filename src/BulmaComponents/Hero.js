import React, { Component } from 'react';
import Image from './Image';
import profilePicture from 'profile-pic.jpg';
class Hero extends Component {
  render() {
    const {color} = this.props;
    return (
      <section className={`hero is-fullheight is-${color}`}>
        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container has-text-centered">
            Isaias Valle
            <Image
              src={profilePicture}
              alt='Isaias Valle Face'
              isRound
              isCentered
              width={250}
              height={250}
            ></Image>
            Web Developer
          </div>
        </div>

        {/* {<!-- Hero footer: will stick at the bottom -->} */}
        <div className="hero-foot is-secondary-dark">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li><a>Overview</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Hero;