'use strict';

const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', chrome.runtime.getURL('content/content.js'));
const head =
	document.head ||
	document.getElementsByTagName('head')[0] ||
	document.documentElement;
head.insertBefore(script, head.lastChild);
