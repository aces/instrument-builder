import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AddListItemForm from './addListItemForm';

class EditDrawer extends Component {
  constructor(props) {
    super(props);

    this.renderDrawerContent = this.renderDrawerContent.bind(this);
    // this.getChoicesFromValueConstraints = this.getChoicesFromValueConstraints.bind(this);
  }

  renderDrawerContent() {
    let hidden = (!this.props.open || Object.keys(this.props.field).length == 0);
    let contentDiv = {
      order: 2,
      flex: 10,
      padding: '20px',
      overflow: 'scroll',
    };
    if (!this.props.open) {
      contentDiv = {
        order: 2,
        flex: 1,
      };
    }
    let editForm = null;
    let inputType = null;
    if (Object.keys(this.props.field).length != 0) {
      inputType = this.props.inputType;
    }
    // const choices = this.getChoicesFromValueConstraints();
    switch (inputType) {
      case 'select':
      case 'multiselect':
        editForm = <AddListItemForm
                     uiType='select'
                     formData={this.props.field}
                     onEditField={this.props.onEditField}
                     mode='edit'
                     addChoices={this.props.addChoices}
                   />;
        break;
      case 'radio':
        editForm = <AddListItemForm
                     uiType='radio'
                     formData={this.props.field}
                     onEditField={this.props.onEditField}
                     mode='edit'
                     addChoices={this.props.addChoices}
                   />;
        break;
    }
    return (
      <div style={contentDiv} hidden={hidden}>
        <FieldsetElement
          name='editFieldForm'
          legend='Edit Field'
        >
        {editForm}
        </FieldsetElement>
      </div>
    );
  }

  // getChoicesFromValueConstraints() {
  //   if (this.props.selectedField.hasOwnProperty('https://schema.repronim.org/valueconstraints')) {
  //     if ((this.props.selectedField['https://schema.repronim.org/valueconstraints']).hasOwnProperty(0)) {
  //       if ((this.props.selectedField['https://schema.repronim.org/valueconstraints'][0]).hasOwnProperty('http://schema.org/itemListElement')) {
  //         const valueConstraints = this.props.selectedField['https://schema.repronim.org/valueconstraints'][0]['http://schema.org/itemListElement'][0]['@list'];
  //         return valueConstraints.map((valueConstraint, index) => {
  //           return ({
  //             name: valueConstraint['http://schema.org/name'][0]['@value'],
  //             value: valueConstraint['http://schema.org/value'][0]['@value'],
  //           });
  //         });
  //       }
  //     }
  //   }
  //   return null;
  // }

  render() {
    let icon = 'fas fa-chevron-right';
    let outerDiv = {
      background: 'white',
      border: '1px solid #C3D5DB',
      order: 3,
      flex: 10,
      margin: '-1px -1px 0 -1px',
      display: 'flex',
      justifyContent: 'space-between',
    };
    if (!this.props.open) {
      icon = 'fas fa-chevron-left';
      outerDiv = {
        background: 'white',
        border: '1px solid #C3D5DB',
        order: 3,
        flex: 1,
        margin: '-1px -1px 0 -1px',
        display: 'flex',
        justifyContent: 'space-between',
      };
    }

    return (
      <div style={outerDiv}>
        <div
          style={{order: 1, flex: 1, display: 'flex', justifyContent: 'center'}}
          onClick={this.props.showDrawer}
        >
          <span style={{alignSelf: 'center'}}><i className={icon}></i></span>
        </div>
        {this.renderDrawerContent()}
      </div>
    );
  }
}

EditDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  showDrawer: PropTypes.func.isRequired,
  field: PropTypes.object,
  onEditField: PropTypes.func.isRequired,
  addChoices: PropTypes.func,
};

export default EditDrawer;
