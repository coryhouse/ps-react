import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
