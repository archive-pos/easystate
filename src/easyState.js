import { useState } from "react";

function easyState(initialValue) {
	const [value, setValue] = useState(initialValue);

	const obj = {
		get $() {
			return value;
		},
		set $(newValue) {
			setValue(newValue);
		},
		effect: value,
	};

	return obj;
}

export default easyState;
