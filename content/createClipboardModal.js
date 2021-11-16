import parseNode from './utils/parseNode.js';

/**
 * div: modal-container
 * 		div: modal-header
 * 			title
 * 		div: modal-body
 * 			MenuItem
 * 		div: modal-footer
 * 			button: clear clipboard-store
 *
 */

export default function createClipboardModal(clipboardItems, contextDocument) {
	const jsonML = [
		'div',
		{
			class: 'positioner',
		},
		[
			'div',
			{ class: 'modal-container' },
			['div', { class: 'modal-header' }, ['h3', 'Click to paste']],
			['div', { class: 'modal-body' }].concat(
				clipboardItems.map((clipboardItem) => {
					return [
						'div',
						{ class: 'clipboard-item' },
						clipboardItem.text,
					];
				})
			),
			[
				'div',
				{ class: 'modal-footer' },
				[
					'button',
					{ class: 'clear-button', type: 'button' },
					'clear clipboard',
				],
			],
		],
	];

	const clipboardModal = parseNode(contextDocument, jsonML);

	contextDocument.documentElement
		.getElementsByTagName('body')[0]
		.appendChild(clipboardModal);
}
