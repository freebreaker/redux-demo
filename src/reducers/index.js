
import {SEND_MESSAGE} from "../action/MessageAction"

export function messageList(state,action){

        const messageState=Object.assign({},state,action)

        switch (action.type){
        case SEND_MESSAGE:
            
            break
    }
    return messageState
}