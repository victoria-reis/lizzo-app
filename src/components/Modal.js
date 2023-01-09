import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { appActions } from "../store";

const ModalBackdrop = (props) => {
	return (
		<>
			{props.modalState && (
				<div className="backdrop" onClick={props.onClose}></div>
			)}
		</>
	);
};

const ModalOverlay = (props) => {
	return (
		<>
			{props.modalState && (
				<div className="modal">
					<p>Please select a valid value.</p>
					<button className="ok" onClick={props.onClose}>
						OK
					</button>
				</div>
			)}
		</>
	);
};

const Modal = () => {
	const dispatch = useDispatch();
	const modalState = useSelector((state) => {
		return state.showModal;
	});

	const closeModalHandler = () => {
		dispatch(appActions.setShowModal());
	};
	return (
		<>
			{ReactDOM.createPortal(
				<ModalBackdrop modalState={modalState} onClose={closeModalHandler} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay modalState={modalState} onClose={closeModalHandler} />,
				document.getElementById("overlay-root")
			)}
		</>
	);
};

export default Modal;
