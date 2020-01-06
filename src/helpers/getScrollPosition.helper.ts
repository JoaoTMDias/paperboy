export const getScrollPosition = (element = window) => {
	if (document !== undefined) {
		const { scrollTop } = document.body;
		const yValue = element.pageYOffset !== undefined ? element.pageYOffset : scrollTop;
		return {
			y: yValue,
		};
	}
};

export default getScrollPosition;
