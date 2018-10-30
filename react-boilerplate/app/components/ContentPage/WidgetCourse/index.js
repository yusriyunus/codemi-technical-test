import React, { Component } from 'react';
import Chart from './Chart';
import WidgetTitle from './WidgetTitle';
import Wrapper from './Wrapper';
import Courses from './Courses';
import Competition from './Competition';
import ChartWrapper from './ChartWrapper';

class WidgetLineChart extends Component {
  state = {
    courses: [
      'Digital Marketing',
      'Microsoft Office 2016',
      'Marketing Fundamental',
      'Know Your Costumer',
      'Excel Data Analysis',
      'Excel 2016',
    ],
    completed: ['15,243', '14,143', '13,243', '10,243', '9,243', '1,243'],
    competition: ['86,5%', '80,5%', '76,5%', '36,5%', '6,5%', '5%'],
  };

  renderList = () => {
    return this.state.courses.map((element, index) => {
      return (
        <ChartWrapper>
          <Courses>
            <div style={{ color: 'green' }}>{element}</div>
            <hr />
          </Courses>
          <Competition>
            <div>{this.state.completed[index]}</div>
            <hr />
          </Competition>
          <Competition>
            <div>{this.state.competition[index]}</div>
            <hr />
          </Competition>
        </ChartWrapper>
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <WidgetTitle>
          <h4>What courses do your users visit?</h4>
        </WidgetTitle>
        <Chart>
          <ChartWrapper>
            <Courses>
              <div>Courses</div>
              <hr />
            </Courses>
            <Competition>
              <div>Completed</div>
              <hr />
            </Competition>
            <Competition>
              <div>Competition %</div>
              <hr />
            </Competition>
          </ChartWrapper>
          {this.renderList()}
        </Chart>
      </Wrapper>
    );
  }
}

export default WidgetLineChart;
