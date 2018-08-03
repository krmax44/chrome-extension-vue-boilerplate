const defaultSettings = {
	foo: 'bar'
};

/**
  * Returns a promise with the settings.
*/
const get = () => new Promise(resolve => {
	chrome.storage.local.get(defaultSettings, data => resolve(data));
});

/**
 * Change the settings.
 * @param {Object} settings: key-value pairs of the settings to change
*/
const set = (settings) => new Promise(resolve => {
	chrome.storage.local.set(settings, () => resolve());
});

/**
  * Subscribe to storage changes.
  *	@param {function} callback: will be executed when the settings change with the settings as the parameter
  * @param {Boolean} executeRightAway: execute callback with settings attatched right away
*/
const subscribe = (callback, executeRightAway) => {
	const fn = () => {
		get().then(callback);
	};

	if (executeRightAway) {
		fn();
	}

	chrome.storage.onChanged.addListener(fn);
};

module.exports = { get, set, subscribe };