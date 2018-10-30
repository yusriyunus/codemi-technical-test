import React, { Component } from 'react';
import Chart from './Chart';
import Wrapper from './Wrapper';
import WidgetTitle from './WidgetTitle';
import SubMenuWrapper from './SubMenuWrapper';
import BarChartContentWrapper from './BarChartContentWrapper';
import BarChartWrapper from './BarChartWrapper';
import LineHorizontalWrapper from './LineHorizontalWrapper';
import YAxisWrapper from './YAxisWrapper';
import SubMenu from './SubMenu';
import BartChart from './BarChart';

class WidgetSocialLearning extends Component {
  state = {
    yAxis: ['25K', '20K', '15K', '10K'],
    BarChart: ['98%', '96%', '78%', '60%', '82%', '86%', '92%'],
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
  renderBarChart = () => {
    return this.state.BarChart.map(percentage => {
      return <BartChart height={percentage} />;
    });
  };

  render() {
    return (
      <Wrapper>
        <WidgetTitle>
          <h4>How's your learning activity?</h4>
        </WidgetTitle>
        <Chart>
          <SubMenuWrapper>
            <SubMenu style={{ borderTop: '5px solid forestgreen' }}>
              <b>Discusssion</b>
            </SubMenu>
            <SubMenu>Blog Post</SubMenu>
            <SubMenu>Questions and Answer</SubMenu>
          </SubMenuWrapper>
          <BarChartContentWrapper>
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
            <BarChartWrapper>{this.renderBarChart()}</BarChartWrapper>
          </BarChartContentWrapper>
        </Chart>
      </Wrapper>
    );
  }
}

export default WidgetSocialLearning;
