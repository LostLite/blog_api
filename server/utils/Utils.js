export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.type = 'success';
    this.data = data;
    this.message = message;
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.type = 'error';
    this.message = message;
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }

    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message
    });
  }
}
