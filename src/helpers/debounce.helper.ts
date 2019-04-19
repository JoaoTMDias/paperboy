export const debounce = (func: any) => {
	// This holds the requestAnimationFrame reference, so we can cancel it if we wish
	let frame: any;

	// The debounce function returns a new function that can receive a variable number of arguments
	return (...params: any) => {
		// If the frame variable has been defined, clear it now, and queue for next frame
		if (frame) {
			cancelAnimationFrame(frame);
		}

		// Queue our function call for the next frame
		frame = requestAnimationFrame(() => {
			// Call our function and pass any params we received
			func(...params);
		});
	};
};
