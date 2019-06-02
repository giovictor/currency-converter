import React from 'react';
const WithLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p>Be Hold, fetching data may take some time :)</p>);
  }
}
export default WithLoading;