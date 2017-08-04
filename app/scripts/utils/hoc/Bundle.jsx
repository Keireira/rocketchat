import React from 'react';

class Bundle extends React.PureComponent {
  state = {
    module: null,
  };

  componentWillMount() {
    this.load(this.props);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  };

  load = (props) => {
    this.setState({
      module: null,
    });

    props.load((module) => {
      this.setState({
        module: (module.default) ? module.default : module,
      });
    });
  };

  render() {
    return (this.state.module) ? this.props.children(this.state.module) : <Preloader />;
  };
};

const Preloader = () => {
  return (
    <span>Loading...</span>
  );
};

export default Bundle;
