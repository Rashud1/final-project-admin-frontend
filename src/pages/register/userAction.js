import {requestPending, requestFail, responseSuccess} from "./userSlice"
import { createUser } from "../../api/userApi";



export const userRegister = newUser => async dispatch => {
    console.log(newUser)
    dispatch(requestPending())
  


//call api
const result = await createUser(newUser)
console.log(result, "from user action")
result?.status === "success" ? dispatch(responseSuccess(result)) : dispatch(requestFail(result))
//dispatch response
}