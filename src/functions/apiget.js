const apiGet = (component, route) => {
  return fetch("http://localhost:4000/" + route).then(res => res.json()).then(
    (result) => {
      component.setState({
        isLoaded: true,
        data: result
      });
    },
    (error) => {
      component.setState({
        isLoaded: true,
        error
      });
    }
  );
}

export default apiGet;
