import Settings from './Settings';

Settings.subscribe(settings => {
	console.log(settings);
}, true);