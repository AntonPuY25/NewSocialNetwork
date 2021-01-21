import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import {TypePropsMusic} from "../../Types/Types";



const Music: React.FC<TypePropsMusic> = ({songs,AddSongAC}) => {
    let [textSong, setTextSong] = useState<string>("")
    let changeTextSong = (event: ChangeEvent<HTMLInputElement>) => {
        setTextSong(event.currentTarget.value)
    }
    let addSong = () => {
        AddSongAC(textSong)
        setTextSong("")
    }
    const onKeyHandlerInput = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            AddSongAC(textSong)
            setTextSong("")
        }
    }
    return <div>
        <div>
            {songs.map((s, id) => {
                return <div key={id}>{s}</div>
            })}
        </div>
        <div>
            <div>
                <input onKeyPress={onKeyHandlerInput}
                       value={textSong}
                       onChange={changeTextSong}
                autoFocus/>

            </div>
            <div>
                <button onClick={addSong}>Add Song</button>
            </div>
        </div>
    </div>
}
export default Music;