import React from 'react';


class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		isEmpty: this.props.profileStatus ? false : true,
		profileStatus: this.props.profileStatus
	};

	componentDidMount() {
		console.log(this.state);
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
			isEmpty: false
		});
	};
	deactivateEditMode = () => {
		this.setState({
			editMode: false,
			isEmpty: this.props.profileStatus ? false : true,
		});
		this.props.updateUserProfileStatus(this.state.profileStatus);
	};

	statusOnChangeHandle = (e) => {
		this.setState({
			profileStatus: e.target.value
		});
	};



	render() {
		return (
			<>
				{!this.state.editMode ?
					<div><span onDoubleClick={ this.activateEditMode }>{this.props.profileStatus}</span></div>
					:
					<div><input autoFocus={true} onBlur={ this.deactivateEditMode } onChange={ (e) => {this.statusOnChangeHandle(e)} } value={this.state.profileStatus}/></div>
				}
				{this.state.isEmpty ? <button onClick={ this.activateEditMode }>Поставить Статус</button> : ''}
			</>
		);
	}
}

export default ProfileStatus;