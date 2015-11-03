exports.circularBuffer = circularBuffer;
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;

function bufferEmptyException() {}
function bufferFullException() {}

function circularBuffer(elementsNumber) {
	var Buffer = {};
	
	var values = [];
	
	
	Buffer.read = function() {
		var readValue = values.shift();

		if (undefined === readValue) {
			throw new bufferEmptyException();
		}
		
		return readValue;
	};
	
	// Next three methods don't really convince me.
	// Should I make them return Buffer like `return Buffer;`?
	Buffer.write = function(element) {
		if ((null !== element) && (undefined !== element)) {
			if (values.length >= elementsNumber) {
				throw new bufferFullException();
			}
			
			values.push(element);
		}
	};
	
	Buffer.forceWrite = function(element) {
		if (values.length >= elementsNumber) {
			values.shift();
			Buffer.write(element);
		} else {
			Buffer.write(element);
		}
	};
	
	Buffer.clear = function() {
		values = [];
	};
	
	return Object.create(Buffer);
}