const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve().catch((req,res,next)).
        catch((err) => next(err))
    }
}


export {asyncHandler} 

// const asyncHandler = (fn) => aync (req,res,next) => {
//     try{
//        await fn(req,res,next);
//     }catch (error){
//        res.status(err.code || 500).json({
//         sucess: false,
//         message: err.message
//        })
//     }
// }