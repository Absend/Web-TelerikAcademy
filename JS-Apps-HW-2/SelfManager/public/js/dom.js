'use strict';

let hasUser = () => {
	return new Promise((resolve, reject) => {
		let userName = localStorage.getItem('username');
		let authKey = localStorage.getItem('authKey');
		resolve({ isLogged: userName && authKey, username: userName });
	})
};