import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store";

const Form = () => {
	const dispatch = useDispatch();

	const songSelected = useSelector((state) => {
		return state.songTitle;
	});

	const showTitle = useSelector((state) => {
		return state.showTitle;
	});

	const onChangeHandler = (event) => {
		dispatch(appActions.setShowTitle(false));
		dispatch(appActions.setSong(event.target.value));
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (!songSelected) {
			dispatch(appActions.setShowTitle(false));
			dispatch(appActions.setShowModal());
			dispatch(appActions.clearVideoSource());
		} else {
			dispatch(appActions.setShowTitle(true));
			dispatch(appActions.setVideoSource());
		}
	};

	return (
		<div className="formContainer">
			<form
				onChange={onChangeHandler}
				style={{ marginBottom: !showTitle ? 134.88 : 0 }}
			>
				<label htmlFor="song-select">Choose a feeling:</label>

				<select name="songs" id="song-select">
					<option value="">I'm feeling...</option>
					<option value="2 Be Loved">Ready to be loved</option>
					<option value="About Damn Time">
						Way too fine to be this stressed
					</option>
					<option value="Rumors">Like the rumors are true</option>
					<option value="Tempo">Like I need tempo</option>
					<option value="Cuz I Love You">Crying because I love you</option>
					<option value="Juice">Juicy</option>
					<option value="Boys">Into boys</option>
					<option value="Fitness">Fit</option>
					<option value="Truth Hurts">100% that b*tch</option>
					<option value="Scuse Me">Myself</option>
					<option value="Good As Hell">Good as hell</option>
					<option value="Batches & Cookies">Gooey</option>
				</select>
				<button onClick={submitHandler}>Submit</button>
			</form>
		</div>
	);
};

export default Form;
