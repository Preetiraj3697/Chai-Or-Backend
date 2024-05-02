import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/Cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    // step1: get user details from frontend
    // step2: validation like not empty, email are correct,
    // step3: check if user already exists: username, email
    // step4: check for images, check for avatar
    // step5: upload them to cloudinary, avatar
    // step6: create user object - create entry in db
    // step7: remove password and refresh token field from response
    // step8: check for user creation
    // step9: return response else return error

   const {username,email,fullname,password} = req.body
   console.log('email',email)
   if(
      [fullname,email,username,password].some((field)=>
       field?.trim() == ""
      )
   ){
    throw new ApiError(400, "All fields are required")
    }
    const existedUser = User.findOne({
        $or: [{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }
    const avatarlocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarlocalPath){
        throw new ApiError(400, "Avatar file is required")
    }


    const avatar = await uploadOnCloudinary(avatarlocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
     
    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user!")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully!😊")
    )

});  


export {registerUser}