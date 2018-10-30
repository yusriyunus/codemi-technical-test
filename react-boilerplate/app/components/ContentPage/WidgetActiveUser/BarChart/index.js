import React, { Component } from 'react';
import Wrapper from './Wrapper';
import TopBar from './TopBar';
import Bar from './Bar';
import Indicator from './Indicator';

class BarChart extends Component {
  render() {
    return (
      <Wrapper style={{ height: this.props.height }}>
        <Bar>
          <TopBar />
        </Bar>
      </Wrapper>
    );
  }
}

export default BarChart;
