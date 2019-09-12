import {CHANGE_ITEM, CLICK_ITEM, DELETE_ITEM, GET_List} from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    item: [
        // "老狼老狼几点了",
        // "七点了",
        // "老狼老狼几点了",
        // "开饭了"
    ]
}

export default (state = defaultState, action) =>{
    if(action.type === CHANGE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === CLICK_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.item.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        // console.log(action.index);
        newState.item.splice(action.index, 1);

        return newState;
    }

    if(action.type === GET_List){
        let newState = JSON.parse(JSON.stringify(state));
        // console.log(action.index);
        newState.item = action.data.data.list;

        return newState;
    }


    return state;
}
