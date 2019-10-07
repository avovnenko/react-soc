import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
	{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
	{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
	{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'}
];

let dialogs = [
	{id: 1, name: 'Anton'},
	{id: 2, name: 'Natasha'},
	{id: 3, name: 'Masik'}
];

let messages = [
	{id: 1, message: 'Hello'},
	{id: 2, message: 'Hello, how are you?'},
	{id: 3, message: 'Good'}
];

console.log('alert');

ReactDOM.render(<App myPosts={postsData} myDialogs={dialogs} myMessages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
