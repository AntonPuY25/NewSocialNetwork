import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {TypePropsMusic} from "../../Types/Types";
import {Button, TextField} from "@material-ui/core";
import s from './music.module.css'


const Music: React.FC<TypePropsMusic> = ({songs, AddSongAC}) => {
    let [textSong, setTextSong] = useState<string>("")
    let changeTextSong = (event: ChangeEvent<HTMLInputElement>) => {
        setTextSong(event.currentTarget.value)
    }
    let addSong = () => {
        AddSongAC(textSong)
        setTextSong("")
    }
    const onKeyHandlerInput = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
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
            <div className={s.inputText}>
                <TextField defaultValue="Default Value"
                           multiline variant="outlined" onKeyPress={onKeyHandlerInput}
                           value={textSong}
                           label={'Enter Message'}
                           onChange={changeTextSong}
                           autoFocus/>

            </div>
            <div>
                <Button variant={"contained"} color={"default"} onClick={addSong}>Add Song</Button>
            </div>
        </div>
    </div>
}
export default Music;