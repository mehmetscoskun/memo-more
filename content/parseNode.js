/**
 * Transform the given JsonML fragment into the corresponding DOM structure, using the given document to
 * create nodes.
 *
 * JsonML is always expected to be a JavaScript structure. If you have a string of JSON, use JSON.parse first.
 *
 * @param  {Document}  document  The document to use to create nodes
 * @param  {JsonML}    jsonml    The JsonML fragment to parse
 *
 * @return  {Element}      The root node of the constructed DOM fragment
 */
export default function parseNode(document, jsonml) {
	if (typeof jsonml === 'string') {
		return document.createTextNode(jsonml);
	}

	if (!Array.isArray(jsonml)) {
		throw new TypeError('JsonML element should be an array or string');
	}

	const name = jsonml[0];

	// Node must be a normal element. First: process attributes to check for namespace declarations
	const attributes = {};
	const firstChild = jsonml[1];
	let firstChildIndex = 1;

	if (typeof firstChild === 'object' && !Array.isArray(firstChild)) {
		for (const attributeName in firstChild) {
			// Note: do not set xmlns attributes. They have no place in DOM
			attributes[attributeName] = firstChild[attributeName];
		}
		firstChildIndex = 2;
	}

	const element = document.createElement(name);

	// Now do the 'normal attributes'
	for (const attributeName of Object.keys(attributes)) {
		element.setAttribute(attributeName, attributes[attributeName]);
	}

	// Parse children
	for (let i = firstChildIndex, l = jsonml.length; i < l; ++i) {
		const node = parseNode(document, jsonml[i]);
		element.appendChild(node);
	}

	return element;
}
