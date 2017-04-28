'use strict';

const data = (() => {
	class Data {

		signUpUser(user) {
			return requester.post('/api/users', user);
		}

		signInUser(user) {
			return requester.put('/api/users/auth', user);
		}

		//================================================//

		getCategories() {
			return requester.get('/api/categories');
		}

		//================================================//

		getEvents() {
			return requester.get('/api/events');
		}

		postEvents(event) {
			return requester.post('/api/events', event);
		}

		//================================================//

		getTodos() {
			return requester.get(`/api/todos`);
		}

		getTodoById(id) {
			return requester.put(`/api/todos/${id}`);
		}

		postTodos(todo) {
			return requester.post('/api/todos', todo);
		}
	}

	let newData = new Data();
	return newData;
})()
