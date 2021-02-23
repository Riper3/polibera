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
    apiGet(this, 'blog');
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {data.map(blog => (
            <li key={blog.title}>
              {blog.title} {blog.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Blogs;
