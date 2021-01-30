import React, {ChangeEvent} from "react";

type TypeStatusProps = {
    status: string
    setTextStatusAC:(statusText:string)=>void
    setStatusThunkCreator:(statusText:string)=>void
}
type TypeLocalStatusProps = {
    isToogle: boolean
}

class Status extends React.Component<TypeStatusProps, TypeLocalStatusProps> {
    constructor(props: TypeStatusProps) {
        super(props);
        this.state = {
            isToogle: true
        }
    }
    changeISToggleFalse = () => {
        this.setState({
            isToogle: false
        })
    }
    changeISToggleTrue = () => {
        this.props.setStatusThunkCreator(this.props.status)
        this.setState({
            isToogle: true
        })
    }
    changeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        let text =e.currentTarget.value
       this.props.setTextStatusAC(text)
    }

    render() {

        return <div>
            {this.state.isToogle ?
                <div onDoubleClick={this.changeISToggleFalse}> {this.props.status}</div>
                :
                <div onBlur={this.changeISToggleTrue}><input onChange={this.changeStatus} autoFocus value={this.props.status}/></div>
            }
        </div>
    }
}

export default Status;