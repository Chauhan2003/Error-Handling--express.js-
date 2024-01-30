import errorHandler from "../utils/errorHandler.js";

export const userLogin = (req, res, next) => {
    const userLogged = true;

    if(!userLogged){
        return next(new errorHandler("User  is not logged in", 401));
    }

    res.json({
        success: true,
        message: "User Login"
    })
}