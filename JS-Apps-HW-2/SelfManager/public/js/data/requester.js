'use strict';

const requester = (() => {
	class Requester {
		_sendAjax(method, url, data, options) {
			options = options || {};
			data = data || {};

			const headers = options.headers || { ['x-auth-key']: localStorage.getItem('authKey') },
				contentType = options.contentType || 'application/json';

			const promise = new Promise((resolve, reject) => {
				$.ajax(url, {
					method,
					contentType: contentType,
					data: JSON.stringify(data),
					headers,
					success: (response) => {
						resolve(response);
					},
					error: (err) => {
						reject(err);
					}
				});
			});

			return promise;
		}

		get(url, options) {
			return this._sendAjax('GET', url, {}, options);
		}

		post(url, data, options) {
			return this._sendAjax('POST', url, data, options);
		}

		put(url, data, options) {
			return this._sendAjax('PUT', url, data, options);
		}
	}

	const req = new Requester();

	return req;
})();