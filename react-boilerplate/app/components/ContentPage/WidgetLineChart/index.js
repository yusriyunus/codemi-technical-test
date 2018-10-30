import React, { Component } from 'react';
import Chart from './Chart';
import SubMenuWrapper from './SubMenuWrapper';
import SubMenu from './SubMenu';
import LineChartContentWrapper from './LineChartContentWrapper';
import LineHorizontalWrapper from './LineHorizontalWrapper';
import YAxisWrapper from './YAxisWrapper';

class WidgetLineChart extends Component {
  state = {
    yAxis: ['20K', '15K', '10K', '5K'],
  };

  renderYaxis = () => {
    return this.state.yAxis.map((component, index) => {
      return (
        <div>
          <hr style={{ margin: '1vw 0 0 0' }} />
          <h6 style={{ marginBottom: '1.6vw', color: 'gray' }}>{component}</h6>
        </div>
      );
    });
  };
  renderHorizontalLine = () => {
    return this.state.yAxis.map((component, index) => {
      return (
        <div>
          <hr style={{ margin: '1vw 0 0 0' }} />
          <h6 style={{ marginBottom: '3.1vw' }} />
        </div>
      );
    });
  };

  render() {
    return (
      <Chart>
        <SubMenuWrapper>
          <SubMenu style={{ borderTop: '5px solid forestgreen' }}>
            <h5 style={{ margin: '1vw 0' }}>
              <b>Users</b>
            </h5>
            <h2 style={{ margin: 0 }}>58K</h2>
            <h6 style={{ margin: 0 }}>0.2%</h6>
            <h6 style={{ margin: 0 }}>vs last 7 days</h6>
          </SubMenu>
          <SubMenu>
            <h5 style={{ margin: '1vw 0' }}>Course Completed</h5>
            <h2 style={{ margin: 0 }}>5,700</h2>
            <h6 style={{ margin: 0 }}>0.2%</h6>
          </SubMenu>
          <SubMenu>
            <h5 style={{ margin: '1vw 0' }}>Learning Plan Completed</h5>
            <h2 style={{ margin: 0 }}>1,120</h2>
            <h6 style={{ margin: 0 }}>0.4%</h6>
          </SubMenu>
          <SubMenu>
            <h5 style={{ margin: '1vw 0' }}>Learning Hour</h5>
            <h2 style={{ margin: 0 }}>22m 40s</h2>
            <h6 style={{ margin: 0 }}>0.2%</h6>
          </SubMenu>
        </SubMenuWrapper>
        <LineChartContentWrapper>
          <LineHorizontalWrapper>
            {this.renderHorizontalLine()}
            <div>
              <hr style={{ marginTop: '1vw' }} />
            </div>
          </LineHorizontalWrapper>
          <YAxisWrapper>
            {this.renderYaxis()}
            <div>
              <h6 style={{ margin: 0, color: 'gray' }}>0</h6>
              <hr style={{ margin: 0 }} />
            </div>
          </YAxisWrapper>
        </LineChartContentWrapper>
      </Chart>
    );
  }
}

export default WidgetLineChart;
