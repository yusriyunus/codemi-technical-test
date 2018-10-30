import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainMenu from './MainMenu';
import SubMainMenu from './SubMainMenu';
import SubMenus from './SubMenu';
import Logo from './Logo';

class SideBar extends Component {
  render() {
    return (
      <Sidebar>
        <MainMenu>
          <h4>HOME</h4>
        </MainMenu>
        <hr />
        <SubMainMenu>
          <h4>LEARNING</h4>
        </SubMainMenu>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-diamond" />
          </Logo>
          <h5>Courses</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-usb" />
          </Logo>
          <h5>Learning Plan</h5>
        </SubMenus>
        <hr />
        <SubMainMenu>
          <h4>MANAGE</h4>
        </SubMainMenu>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-user" />
          </Logo>
          <h5>Users</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-sun-o" />
          </Logo>
          <h5>Skills</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-area-chart" />
          </Logo>
          <h5>Reports</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-line-chart" />
          </Logo>
          <h5>Analytics</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-bullhorn" />
          </Logo>
          <h5>Announcements</h5>
        </SubMenus>
        <hr />
        <SubMainMenu>
          <h4>CONFIGURE</h4>
        </SubMainMenu>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-star-half-o" />
          </Logo>
          <h5>Points</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-sun-o" />
          </Logo>
          <h5>Reward</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-envelope-o" />
          </Logo>
          <h5>Email templates</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-info-circle" />
          </Logo>
          <h5>Company info</h5>
        </SubMenus>
        <SubMenus>
          <Logo>
            <h5 className="fa fa-user" />
          </Logo>
          <h5>Billing</h5>
        </SubMenus>
      </Sidebar>
    );
  }
}

export default SideBar;
