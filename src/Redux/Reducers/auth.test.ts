import {TypeInitialStateAuth, TypeResponseDataData} from "../../Types/Types";
import authResucer, {SetAuthDataAC, SetAuthIsAuthTestAC} from "./authReducer";


let initilaState: TypeInitialStateAuth;


beforeEach(() => {
    initilaState = {
        data: {} as TypeResponseDataData,
        isAuth:false}
})
test('TestAuthReducerSetAuthDataAC', () => {
    let action = SetAuthDataAC({
        id: 1,
        email: 'puy25@bk.ru',
        login: 'PuY25'
    });

    let result = authResucer(initilaState, action)

    expect(result.data.email).toBe('puy25@bk.ru')
    expect(result.data).not.toBe({})

})
test('TestAuthReducerIsAuthAC', () => {
    let action = SetAuthIsAuthTestAC(true)

    let result = authResucer(initilaState, action)

    expect(result.isAuth).toBe(true)

})