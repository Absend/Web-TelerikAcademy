'use strict';

const validator = (() => {
	class Validator {
		constructor() {
			this.constantz = {
				emailReg: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				passwordReg: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
				usernameReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
				commentReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
			}
		}

		isValidEmail(email) {
			let letters = this.constantz.emailReg;

			if (!email || !email.match(letters)) {
				notifier.error('E-mail must consist of (letters, numbers, dot and symbol @) ');
				return false;
			}
			return true;
		}

		isValidPassword(password) {
			let letters = this.constantz.passwordReg;

			if (!password || !password.match(letters)) {
				notifier.error('Password must contain at least ( <br>6 characters: UPPERCASE, lowercase and Numbers )');
				return false;
			}
			return true;
		}

		isValidUsername(username) {
			let letters = this.constantz.usernameReg;

			if (!username || username.length < 3 || username.length > 20) {
				notifier.error('Username must be consist of min 3 symbols and max of 20 symbols');
				return false;
			}

			if (!username.match(letters)) {
				notifier.error('Username must consist of letters and numbers');
				return false;
			}
			return true;
		}
	}

	const newValid = new Validator();
	return newValid;
})();
