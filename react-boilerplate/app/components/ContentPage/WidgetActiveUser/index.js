import React, { Component } from 'react';
import Chart from './Chart';
import Wrapper from './Wrapper';
import BarChartWrapper from './BarChartWrapper';
import BarChart from './BarChart';
import Percentage from './Percentage';

class WidgetActiveUser extends Component {
  state = {
    BarChart: [...Percentage.BarChart],
  };
  renderBarChart = () => {
    return this.state.BarChart.map(percentage => {
      return <BarChart height={percentage} />;
    });
  };

  render() {
    return (
      <Chart>
        <Wrapper>
          <h5 style={{ margin: 0 }}>Active User right now</h5>
          <h1 style={{ marginTop: '.5vw', fontSize: '5rem' }}>479</h1>
          <h6 style={{ marginTop: '2vw' }}>Page views per minute</h6>
          <hr style={{ margin: '5px 0 0 0' }} />
          <BarChartWrapper>{this.renderBarChart()}</BarChartWrapper>
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '15% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '15% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
          <div style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Top Active Pages</h6>
            </div>
            <div style={{ textAlign: 'right', width: '50%' }}>
              <h6 style={{ margin: '10% 0 0 0' }}>Active Users</h6>
            </div>
          </div>
          <hr style={{ margin: '5px 0 0 0' }} />
        </Wrapper>
      </Chart>
    );
  }
}

export default WidgetActiveUser;
