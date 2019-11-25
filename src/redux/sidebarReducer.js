let initialState = {
	friends: [
		{id: 1, name: 'Anton', url: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'},
		{id: 2, name: 'Natasha', url: 'https://content-static.upwork.com/blog/uploads/sites/4/2014/10/27173913/BLOG-Upwork-profile-photo-face.png'},
		{id: 3, name: 'Masik', url: 'https://external-preview.redd.it/w4OHuxBN_rhoieORy0LabFzJ4rB837GmYlqp1P2Q5h8.jpg?auto=webp&s=e48b59100278a43bb318b6d35c0d3298e355cee0'}
	]
};

const sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;