import React from 'react';
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import Friends from "./Friends";


const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends.map( f => <Friend url={f.url} key={f.id} name={f.name}/>)
	}
};
const mapDispatchToProps = () => {
	return {

	}
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;