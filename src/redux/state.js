let state = {
	profilePage: {
		posts: [
			{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
			{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
			{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'},
			{id: 3, name: 'NewCat', status: 'Dog', message: 'Meow, blyat!', likesCount: '1'}
		]
	},
	dialogsPage: {
		messages: [
			{id: 1, message: 'Hello'},
			{id: 2, message: 'Hello, how are you?'},
			{id: 3, message: 'Good'}
		],
		dialogs: [
			{id: 1, name: 'Anton'},
			{id: 2, name: 'Natasha'},
			{id: 3, name: 'Masik'}
		]
	},
	sidebar: {
		friends: [
			{id: 1, name: 'Anton', url: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'},
			{id: 2, name: 'Natasha', url: 'https://content-static.upwork.com/blog/uploads/sites/4/2014/10/27173913/BLOG-Upwork-profile-photo-face.png'},
			{id: 3, name: 'Masik', url: 'https://external-preview.redd.it/w4OHuxBN_rhoieORy0LabFzJ4rB837GmYlqp1P2Q5h8.jpg?auto=webp&s=e48b59100278a43bb318b6d35c0d3298e355cee0'}
		]
	}
};

export default state;