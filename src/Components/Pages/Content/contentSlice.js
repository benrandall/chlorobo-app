import { createSlice } from '@reduxjs/toolkit'

export const contentSlice = createSlice({
    name: 'currentViewPage',
    initialState: {
        viewPage: 0
    },
    reducers: {
        landingPage: state => {
            state.viewPage =  0
        },
        storySequencePage: state => {
            state.viewPage =  1
        },
        mainMenuPage: state => {
            state.viewPage =  2 
        },
        helpPage: state => {
            state.viewPage =  3
        },
        puzzleProgressPage: state => {
            state.viewPage =  4
        },
        puzzleCompletePage: state => {
            state.viewPage =  5
        },
        endSequencePage: state => {
            state.viewPage =  6
    },
  }
})

export const { mainMenuPage, storySequencePage, helpPage, puzzleProgressPage, puzzleCompletePage, endSequencePage} = contentSlice.actions

export default contentSlice.reducer