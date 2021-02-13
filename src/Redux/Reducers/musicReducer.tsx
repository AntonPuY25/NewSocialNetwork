import {TypeActionMusicReducer, TypeInitialStateMusic} from "../../Types/Types";

export const AddSongAC = (song:string)=>{
    return {
        type:ADDSONG,
        song
    } as const

}
export const ADDSONG='music/ADD_SONG'
let initialState: TypeInitialStateMusic = {
    songs: ['Take me back', 'Scars', 'Broken home'],
}
let MusicReducer = (state = initialState, action: TypeActionMusicReducer) => {
  switch (action.type){
      case ADDSONG:
          return {
              ...state,
                songs:[...state.songs,action.song]
          }

      default :
          return state
  }


}

export default MusicReducer;