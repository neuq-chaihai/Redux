
import { CHANGE_ITEM, CLICK_ITEM, DELETE_ITEM, GET_List } from './actionTypes'

export const ChangeItemAction = (value) => ({
    type: CHANGE_ITEM,
    value
});

export const ClickItemAction = () => ({
    type: CLICK_ITEM
})

export const DeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const GetList = (data) => ({
    type: GET_List,
    data
})