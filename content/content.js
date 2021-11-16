import addClipboardModalEventListener from './addClipboardModalEventListener.js';



addClipboardModalEventListener();

const clipboardStore = [];
const addClipboardStore = (thing) => {
	if (clipboardStore.includes(thing)) {
		return;
	}
	clipboardStore.push(thing);
};

// let clipboardData = null;

['cut', 'copy'].forEach((eventType) => {
	document.addEventListener(eventType, (event) => {
		console.log(eventType, event);
		// clipboardData = event.clipboardData;
	});
});

const dispatchPasteEvent = (event) => {
	const dataType = 'text/plain';
	const data = 'mehmet';
	const clipboardData = new DataTransfer();
	clipboardData.setData(dataType, data);
	const clipboardEvent = new ClipboardEvent('paste', {
		clipboardData,
		// dataType,
		// data,
		target: event.target,
		bubbles: true,
		cancelBubble: false,
		cancelable: true,
	});
	event.target.dispatchEvent(clipboardEvent);
};

window.dispatchPasteEvent = dispatchPasteEvent;

document.addEventListener('dblclick', dispatchPasteEvent, true);

document.addEventListener('paste', (event) => {
	console.log('paste', event);
});
