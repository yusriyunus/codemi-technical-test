import React, { Component } from 'react';
import CodemiLogo from './codemiLogo.jpg';
import Logo from './Logo';
import Wrapper from './Wrapper';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import ToogleDown from './ToogleDown';
import Bell from './Bell';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <LeftContent>
          <Logo src={CodemiLogo} alt="codemi logo" />
        </LeftContent>
        <RightContent>
          <ToogleDown>
            <Bell className="glyphicon glyphicon-bell" />
          </ToogleDown>
          <ToogleDown>
            <div className="glyphicon glyphicon-menu-down" />
          </ToogleDown>
        </RightContent>
      </Wrapper>
    );
  }
}

export default Header;
