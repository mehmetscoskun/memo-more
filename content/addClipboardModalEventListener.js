import createClipboardModal from './createClipboardModal.js';

const addClipboardModalEentListener = () => {
	const handleRemoveClipboardModal = (event) => {
		const modals = document.getElementsByClassName('positioner');

		if (modals.length === 0 || modals[0].contains(event.target)) {
			return;
		}

		modals[0].remove();

		document.removeEventListener('click', handleRemoveClipboardModal);
	}

	document.addEventListener('keydown', (event) => {
		if (!event.ctrlKey || event.key !== 'q') {
			return;
		}
		event.preventDefault();
		event.stopPropagation();

		const hasAlreadyModal = document.getElementsByClassName('positioner').length > 0;

		if (hasAlreadyModal) {
			return;
		}

		document.addEventListener('click', handleRemoveClipboardModal);

		createClipboardModal(
			[{ text: 'mehmet' }, { text: 'said' }, { text: 'coskun' }],
			document
		);
	});
}