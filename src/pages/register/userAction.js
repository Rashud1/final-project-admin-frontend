import {requestPending, requestFail, responseSuccess} from "./userSlice"
import { createUser, verifyNewUser } from "../../api/userApi";



export const userRegister = newUser => async dispatch => {
    console.log(newUser)
    dispatch(requestPending())
  


//call api
const result = await createUser(newUser)
console.log(result, "from user action")
result?.status === "success" ? dispatch(responseSuccess(result)) : dispatch(requestFail(result))
//dispatch response
}

export const userEmailVerification = userObj => async dispatch => {
 dispatch(requestPending())
  
//call api
const result = await verifyNewUser (userObj)


result?.status === "success" ? 
dispatch(responseSuccess(result)) 
: dispatch(requestFail(result))
//dispatch response
}