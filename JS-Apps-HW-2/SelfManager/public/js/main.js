$(() => {
	hasUser().then((hasUser) => {
		view.header('.header', { isLogged: hasUser.isLogged, username: hasUser.username });
		view.footer('.footer', {});
		if (hasUser) {
			userCtrl.showCategories();
		} 
	})

	router.init;
});
