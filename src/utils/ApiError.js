class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.sucess = false;
        this.errors = errors

        if(stack){
          this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor) //
        }
    }
}