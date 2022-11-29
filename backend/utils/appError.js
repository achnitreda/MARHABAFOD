class AppError extends Error {
  constructor(message, statusCode){
  super(message);/* Calling the constructor of the parent class. */

  this.statusCode = statusCode;
  this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
  } 
}

module.exports = AppError;