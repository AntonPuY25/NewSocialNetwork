import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {
    TypeMapDispatchToProps,
    TypeMapStateToProps,
    TypeStore
} from "../../Types/Types";
import {RedirectHoc} from "../../HOC/redirectHoc";
import {compose} from "redux";
let mapStateToProps = (state: TypeStore): TypeMapStateToProps => {
    return {
        dataMessage: state.dialogsPage.dataMessage,
    }
}


export default compose<React.ComponentType>(
    connect<TypeMapStateToProps, TypeMapDispatchToProps,
        {}, TypeStore>(mapStateToProps),
    RedirectHoc
)(Dialogs);

