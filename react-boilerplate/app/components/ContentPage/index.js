import React, { Component } from 'react';
import Content from './Content';
import WidgetTitle from './WidgetTitle';
import WidgetRow from './WidgetRow';
import WidgetActiveUser from './WidgetActiveUser';
import WidgetLineChart from './WidgetLineChart';
import WidgetCourse from './WidgetCourse';
import WidgetMostActiveUsers from './WidgetMostActiveUsers';
import WidgetSocialLearning from './WidgetSocialLearning';

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Content>
        <WidgetTitle>
          <h4>Codemi Home</h4>
        </WidgetTitle>
        <WidgetRow>
          <WidgetLineChart />
          <WidgetActiveUser />
        </WidgetRow>
        <WidgetRow>
          <WidgetCourse />
          <WidgetMostActiveUsers />
        </WidgetRow>
        <WidgetRow>
          <WidgetSocialLearning />
        </WidgetRow>
      </Content>
    );
  }
}

export default ContentPage;
