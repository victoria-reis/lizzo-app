import React from "react";

const Form = () => {
	return (
		<form>
			<label for="song-select">Choose a feeling:</label>

			<select name="songs" id="song-select">
				<option value="">Please choose an option</option>
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
				<option value="Scuse Me">Feeling myself</option>
				<option value="Good As Hell">Good as hell</option>
				<option value="Batches & Cookies">Gooey</option>
			</select>
			<button>Submit</button>
		</form>
	);
};

export default Form;
