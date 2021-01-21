import Music from "./music";
import {connect} from "react-redux";
import {AddSongAC} from "../../Redux/Reducers/musicReducer";
import {
    TypeMapDispatchToPropsMusicConteiner,
    TypeMapStateToPropsMusicConteiner,
    TypeStoreReducer
} from "../../Types/Types";

let mapStateToProps=(state:TypeStoreReducer):TypeMapStateToPropsMusicConteiner=>{

    return{
        songs:state.musicPage.songs
    }
}

const MusicConteiner = connect<TypeMapStateToPropsMusicConteiner,
    TypeMapDispatchToPropsMusicConteiner,{},TypeStoreReducer>(mapStateToProps,{AddSongAC,})(Music)
export default MusicConteiner;