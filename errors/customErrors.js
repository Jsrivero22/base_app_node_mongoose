const errorTypes = {
    BadRequest      : { statusCode: 400, message: "Bad request" },
    Unauthorized    : { statusCode: 401, message: "Unauthorized" },
    Forbidden       : { statusCode: 403, message: "Forbidden" },
    NotFound        : { statusCode: 404, message: "Not found" },
    DatabaseError   : { statusCode: 500, message: "Database error" },
};

class AppError extends Error {
    constructor( type, message = "" ) {
        const { statusCode, message: defaultMessage } = errorTypes[type] || { statusCode: 500, message: "Internal server error" };
        super( message || defaultMessage );
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace( this, this.constructor );
    }
}

// example of use
// throw new AppError('BadRequest', 'Invalid data');
// throw new AppError('NotFound');

export {
    AppError
}