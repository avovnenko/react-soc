import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
	posts: [
		{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
		{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
		{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'},
		{id: 4, name: 'NewCat', status: 'Dog', message: 'Meow, blyat!', likesCount: '1'}
	]
};

it('After add length of post should be incremented!', () => {
	// start data
	let action = addPost("Hello tests!",);
	// action
	let newState = profileReducer(state, action);
	// expect output
	expect(newState.posts.length).toBe(5);
});
it('message of new post should be correct!', () => {
	// start data
	let action = addPost("Hello tests!",);
	// action
	let newState = profileReducer(state, action);
	// expect output
	expect(newState.posts[4].message).toBe("Hello tests!");
});
it('After deleting length of posts should be decremented!', () => {
	// start data
	let action = deletePost(4);
	// action
	let newState = profileReducer(state, action);
	// expect output
	expect(newState.posts.length).toBe(3);
});
it(`After deleting length of posts shouldn't be decremented if id is incorrect!`, () => {
	// start data
	let action = deletePost(10000);
	// action
	let newState = profileReducer(state, action);
	// expect output
	expect(newState.posts.length).toBe(4);
});