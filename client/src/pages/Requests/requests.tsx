import React from 'react';
import axios from 'axios';

class Request extends React.Component {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      requestInfo: null,
      error: '',
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getRequestInfo = () => {
    axios
      .get('/request')
      // eslint-disable-next-line @typescript-eslint/ban-types
      .then((response: { data: object }) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidMount() {
    this.getRequestInfo();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div data-testid="container" className="container">
        <p>Sucess</p>
      </div>
    );
  }
}

export default Request;
