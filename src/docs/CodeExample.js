import React from 'react';
import PropTypes from 'prop-types';
import {PrismCode} from "react-prism";

// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

class CodeExample extends React.Component {
  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <PrismCode className="language-jsx">
          {this.props.children}
        </PrismCode>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
