import Music from "./music";
import {connect} from "react-redux";
import {TypeStoreReducer} from "../../Redux/reduxStore";
import {AddSongAC} from "../../Redux/Reducers/musicReducer";

let mapStateToProps=(state:TypeStoreReducer)=>{

    return{
        songs:state.musicPage.songs
    }
}

const MusicConteiner = connect(mapStateToProps,{AddSongAC,})(Music)
export default MusicConteiner;