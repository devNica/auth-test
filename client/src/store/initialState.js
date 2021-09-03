const initialState = {
    accessToken: localStorage.getItem('token'),
    isAuth: false,
    isAlert: false,
    message: "",
    alertType: ""
}

export default initialState