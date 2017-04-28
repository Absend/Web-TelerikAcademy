'use strict';

const view = (() => {
	class View {
		constructor() {
			this.templatesPath = './handlebars-templates/'
		}

		header(selector, data) {
			const template = this.templatesPath + 'common/header.html';
			templateLoader.load(selector, template, data);
		}

		footer(selector, data) {
			const template = this.templatesPath + 'common/footer.html';
			templateLoader.load(selector, template, data);
		}

		//================================================//
		
		signin(selector, data) {
			const template = this.templatesPath + 'signin.html';
			templateLoader.load(selector, template, data);
		}

		signup(selector, data) {
			const template = this.templatesPath + 'signup.html';
			templateLoader.load(selector, template, data);
		}

		categories(selector, data) {
			const template = this.templatesPath + 'categories.html';
			templateLoader.load(selector, template, data);
		}

		//================================================//
		
		home(selector, data) {
			const template = this.templatesPath + 'home.html';
			templateLoader.load(selector, template, data);
		}

		todos(selector, data) {
			const template = this.templatesPath + 'todos.html';
			templateLoader.load(selector, template, data);
		}

		events(selector, data) {
			const template = this.templatesPath + 'events.html';
			templateLoader.load(selector, template, data);
		}

		//================================================//
		
		addTodo(selector, data) {
			const template = this.templatesPath + 'add-todo.html';
			templateLoader.load(selector, template, data);
		}

		addEvent(selector, data) {
			const template = this.templatesPath + 'add-event.html';
			templateLoader.load(selector, template, data);
		}

		singleTodo(selector, data) {
			const template = this.templatesPath + 'single-todo.html';
			templateLoader.load(selector, template, data);
		}
	}

	const newView = new View();
	return newView;
})();