//directive is camelCase here and in the HTML its select-all
export const selectAll = {
	inserted(el) {
		let input = el.querySelector(".q-field__native");
		input.addEventListener("focus", () => {
			if (input.value.length) {
				input.select();
			}
		});
	}
};
