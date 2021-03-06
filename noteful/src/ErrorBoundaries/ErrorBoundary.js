import React from 'react';


export default class ErrorBoundary extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(){
    return {hasError: true}
  }

  render() {
    if (this.state.hasError) {      
      return (
        <h2>There was a problem rendering this page.</h2>
      );
    }
    return this.props.children;
  }  
}

