import {firebaseConnect} from './firebaseConnect';
const redux = require('redux');

const noteInitialState = {
    statusEditFrom: false,
    elementList: {}
}
const allRecuder = (state = noteInitialState, action) => {
    switch(action.type) {
        case "ADD_NEW":
            firebaseConnect.push(action.getItem);
            console.log('Them data thanh cong '+ JSON.stringify(action.getItem));
            return state
        case "CHECK_FORM":
            return {...state,statusEditFrom: !state.statusEditFrom }
        case "RECIVE_ELEMENT_LIST":

            console.log('Nhan data thanh cong : ' + JSON.stringify(action.elementRecive) );
            return {...state,elementList: action.elementRecive }
        case "UPDATE_NOTE":
            firebaseConnect.child(action.elementItem.id).update({
                title: action.elementItem.title,
                content: action.elementItem.content
            })
            console.log('Value update: '+ JSON.stringify(action.elementItem) );
            return {...state,elementList:{} }
        default:
            return state
    }
}
var storeNote = redux.createStore(allRecuder);

export default storeNote;

