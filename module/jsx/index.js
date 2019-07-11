// Import libraries
import React, {Component} from 'react';
// Import component
import AddListItemForm from './addListItemForm';

// An example of how to use components
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      uiType: 'select',
    };

    this.save = this.save.bind(this);
  }

  save(formData) {
    this.setState({formData: formData});
    // can be shorthanded to `this.setState({formData});`
  }

  render() {
    return (
      <AddListItemForm
        uiType={this.state.uiType}
        onSave={this.save}
      />
    );
  }
}

window.addEventListener('load', () => {
  ReactDOM.render(
    <Index />,
    document.getElementById('workspace')
  );
});
