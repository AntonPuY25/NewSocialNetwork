import React from "react";
import {TypeInitialStateMusic} from "../../Types/Types";
import MusicReducer, {AddSongAC} from "./musicReducer";
let initialState: TypeInitialStateMusic;

beforeEach(()=>{
    initialState= {
        songs: ['Take me back', 'Scars', 'Broken home'],
    }
})
test('test_music',()=>{
    let action=AddSongAC('PaPa-Roach')
    let newState = MusicReducer(initialState,action)
    expect(newState.songs.length).toBe(4)
    expect(newState.songs[3]).toBe('PaPa-Roach')
})