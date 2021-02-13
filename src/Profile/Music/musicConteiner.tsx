import Music from "./music";
import {connect} from "react-redux";
import {AddSongAC} from "../../Redux/Reducers/musicReducer";
import {
    TypeMapDispatchToPropsMusicConteiner,
    TypeMapStateToPropsMusicConteiner,
    TypeStore
} from "../../Types/Types";

let mapStateToProps=(state:TypeStore):TypeMapStateToPropsMusicConteiner=>{

    return{
        songs:state.musicPage.songs
    }
}

const MusicConteiner = connect<TypeMapStateToPropsMusicConteiner,
    TypeMapDispatchToPropsMusicConteiner,{},TypeStore>(mapStateToProps,{AddSongAC,})(Music)
export default MusicConteiner;