import React, { Component } from 'react';
import s from './ProfileInfo.module.css';
class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: !this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivateEditMode = () => {
    console.log(this);
    this.setState({
      editMode: false,
    });

    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              value={this.state.status}
              onBlur={this.deActivateEditMode}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || '---'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
