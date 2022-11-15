import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsData = [
	{
		songTitle: "2 Be Loved",
		videoURL: "https://www.youtube.com/embed/krdQLzzAeZU",
	},
	{
		songTitle: "About Damn Time",
		videoURL: "https://www.youtube.com/embed/IXXxciRUMzE",
	},
	{
		songTitle: "Rumors",
		videoURL: "https://www.youtube.com/embed/4P9XUrniiK4",
	},
	{
		songTitle: "Tempo",
		videoURL: "https://www.youtube.com/embed/Srq1FqFPwj0",
	},
	{
		songTitle: "Cuz I Love You",
		videoURL: "https://www.youtube.com/embed/NqjPqsry7no",
	},
	{
		songTitle: "Juice",
		videoURL: "https://www.youtube.com/embed/XaCrQL_8eMY",
	},
	{
		songTitle: "Boys",
		videoURL: "https://www.youtube.com/embed/HQliEKPg1Qk",
	},
	{
		songTitle: "Fitness",
		videoURL: "https://www.youtube.com/embed/9yzsh-PDF30",
	},
	{
		songTitle: "Truth Hurts",
		videoURL: "https://www.youtube.com/embed/P00HMxdsVZI",
	},
	{
		songTitle: "Scuse Me",
		videoURL: "https://www.youtube.com/embed/tjILCNcHevY",
	},
	{
		songTitle: "Good As Hell",
		videoURL: "https://www.youtube.com/embed/SmbmeOgWsqE",
	},
	{
		songTitle: "Batches & Cookies",
		videoURL: "https://www.youtube.com/embed/nQaRQe86suA",
	},
];

const appSlice = createSlice({
	name: "App",
	initialState: {
		songTitle: undefined,
		videoSource: undefined,
		showModal: false,
	},
	reducers: {
		setSong: (state, action) => {
			state.songTitle = action.payload;
		},
		setVideoSource: (state) => {
			songsData.forEach((item) => {
				if (item.songTitle === state.songTitle) {
					state.videoSource = item.videoURL;
				}
			});
		},
		setShowModal: (state) => {
			state.showModal = !state.showModal;
		},
		clearVideoSource: (state) => {
			state.videoSource = undefined;
		},
	},
});

const store = configureStore({
	reducer: appSlice.reducer,
});

export const appActions = appSlice.actions;

export default store;
