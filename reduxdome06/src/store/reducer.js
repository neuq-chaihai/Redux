const reducerInitialState = {
    InputValue: "Write SomeThing",
    item: [
        "HelloWorld!!!",
        "HelloWorld!!!",
        "HelloWorld!!!",
        "HelloWorld!!!"
    ]
}
const reducer = (state = reducerInitialState, action) => {
    switch (action.type) {
        case "ACTION_TYPE_1":
            return state
        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}
export default reducer;