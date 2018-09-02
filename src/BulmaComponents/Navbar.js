import React, { Component } from "react";


const objToClassString = obj => {
  const classList = [];
  for(let className in obj){
    if(obj[className])
      classList.push(className);
  }
  return classList.join(' ');
}

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    }

    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
  }
  render() {
    const { fixed, color, variation, hasBurger } = this.props
    const getColorAltClass = (color, variation) => {
      if(color){
        let className = 'is-'
        className+=color;
        if(variation)
          className+=`-${variation}`;
        
        return className;
      }
      return '';
    };
    const navClassObj = {
      'navbar': true,
      [`is-fixed-${fixed}`]: fixed,
      [getColorAltClass(color, variation)]: color
    };
    let burger
    if(hasBurger){
      const burgerClassNames = {
        'navbar-burger': true,
        'burger': true,
        'is-active': this.state.isMenuOpen
      }
      burger = 
        <span className={objToClassString(burgerClassNames)} onClick={this.handleMobileMenuClick} data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
    }
    return (
      <nav className={objToClassString(navClassObj)}>
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">BRAND</a>
            {burger}
          </div>
          <div className={objToClassString({
            'navbar-menu':true,
            'is-active':this.state.isMenuOpen
          })}>
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item" href="https://github.com/guitartsword/guitartsword.github.io" target="_blank" rel="noopner noreferrer" download>
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                 Github
              </a>
              <a className="navbar-item" href="https://docs.google.com/uc?export=download&id=1k964u6EdJuQ6h7qCwIfD6KvxNkd7sZsb">
                <span className="is-primary-dark is-inverted">
                  <span className="icon">
                    <i className="fas fa-file-download"></i>
                  </span>
                   Download PDF
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  handleMobileMenuClick(){
    console.log('click', this.state.isMenuOpen);
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }
}

export default NavBar;