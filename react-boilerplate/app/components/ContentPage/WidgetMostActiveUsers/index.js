import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Wrapper from './Wrapper';
import WidgetTitle from './WidgetTitle';
import Courses from './Courses';
import Competition from './Competition';
import ChartWrapper from './ChartWrapper';

class WidgetLineChart extends Component {
  state = {
    users: [],
    completed: ['15,243', '14,143', '13,243', '10,243', '9,243', '1,243'],
    competition: ['86,5%', '80,5%', '76,5%', '36,5%', '6,5%', '5%'],
  };

  componentWillMount() {
    var name = [];
    console.log('dijalankan');
    axios
      .get(' https://swapi.co/api/people/')
      .then(res => {
        return res.data.results.map((element, index) => {
          if (index < 5) {
            name.push(element.name);
          }
          this.setState({ users: name });
        });
      })
      .catch(err => console.log(err));
  }

  renderList = () => {
    return this.state.users.map((element, index) => {
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
    console.log(this.state.users, 'state');
    return (
      <Wrapper>
        <WidgetTitle>
          <h4>Who is your active users?</h4>
        </WidgetTitle>
        <Chart>
          <ChartWrapper>
            <Courses>
              <div>Users</div>
              <hr />
            </Courses>
            <Competition>
              <div>Completed</div>
              <hr />
            </Competition>
            <Competition>
              <div>Points</div>
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
