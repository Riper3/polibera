import React from 'react';
import apiGet from '../../functions/apiget';

 class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    apiGet(this, 'blog' + this.props.match.url);
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <h2>{data.title}</h2>
      );
    }
  }
}

export default Blogs;
