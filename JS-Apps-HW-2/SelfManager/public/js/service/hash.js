'use strict';

const hash = (() => {
	class Hash {

		hashMd5(msg) {
			return CryptoJS.MD5(msg).toString();
		}
	}

	const newHash = new Hash();
	return newHash;
})();