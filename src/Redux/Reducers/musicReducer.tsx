type TypeAddSongAC = ReturnType<typeof AddSongAC>
export const AddSongAC = (song:string)=>{
    return {
        type:ADDSONG,
        song
    } as const

}
const ADDSONG='ADD_SONG'
export type TypeInitialStateMusic = {
    songs:string[]
}
type TypeAction = TypeAddSongAC

let initialState: TypeInitialStateMusic = {
    songs: ['Take me back', 'Scars', 'Broken home'],

}

let MusicReducer = (state = initialState, action: TypeAction) => {
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