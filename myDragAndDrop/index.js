function _getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function dragAndDrop(dragSelector, dropSelector) {
	let draggableObj = $(dragSelector);
	draggableObj.attr('draggable', 'True');

	let draggableObjId = draggableObj.attr('id');
	if (!draggableObjId) {
		let randomId = _getRandomNumber(1, 1000000).toString();
		draggableObj.attr('id', randomId);
	}

	draggableObj.on('dragstart', function drag(e) {
		e.dataTransfer = e.originalEvent.dataTransfer;
		e.dataTransfer.setData("text", e.target.id);
	})

	let trapObj = $(dropSelector);
	trapObj.on('dragenter', function allowDrop(e) {
		e.preventDefault();
	})
	trapObj.on('dragover', function allowDrop(e) {
		e.preventDefault();
	})
	trapObj.on('drop', function drop(e) {
		e.preventDefault();
		e.dataTransfer = e.originalEvent.dataTransfer;

		let objId = e.dataTransfer.getData("text");
		let selector = '#' + objId;
		e.target.appendChild(document.getElementById(objId));
	})
}
