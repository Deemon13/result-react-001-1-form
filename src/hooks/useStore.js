import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	checkPassword: '',
};

// const initialNoErrors = {
// 	emailError: '',
// 	passwordError: '',
// 	checkPasswordError: '',
// };

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (stateName, newValue) => {
			setState({ ...state, [stateName]: newValue });
		},
		resetState() {
			setState(initialState);
		},
	};
};

// export const useErrors = () => {
// 	const [errorState, setErrorState] = useState(initialNoErrors);

// 	return {
// 		getErrorState: () => errorState,
// 		updateErrorState: (errorName, newErrorValue) => {
// 			setErrorState({ ...errorState, [errorName]: newErrorValue });
// 		},
// 		resetErrorState() {
// 			setErrorState(initialNoErrors);
// 		},
// startEnter: () => {
// 	const allErrors = errorState.for (const key in object) {
// 		if (Object.hasOwnProperty.call(object, key)) {
// 			const element = object[key];

// 		}
// 	}
// }
// 	};
// };
