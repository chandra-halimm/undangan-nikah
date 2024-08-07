class ResponseHandler {
  constructor(res) {
    this.res = res;
  }

  custom(code, message, data) {
    this.res.status(code).json({
      status: {
        code,
        message,
      },
      data,
    });
  }

  success200(data) {
    this.res.status(200).json({
      status: {
        code: 200,
        message: "success get data",
      },
      data,
    });
  }

  success201(data) {
    this.res.status(201).json({
      status: {
        code: 201,
        message: "success post data",
      },
      data,
    });
  }

  // Response Fail
  fail400(msg) {
    this.res.status(400).json({
      status: {
        code: 400,
        message: `Client side error! - ${msg}`,
      },
      data: null,
    });
  }

  fail401() {
    this.res.status(401).json({
      status: {
        code: 401,
        message: "Unauthorized Access!",
      },
      data: null,
    });
  }

  fail403(msg) {
    this.res.status(403).json({
      status: {
        code: 403,
        message: `Forbidden - ${msg}`,
      },
      data: null,
    });
  }

  fail404() {
    this.res.status(404).json({
      status: {
        code: 404,
        message: "URL not found!",
      },
      data: null,
    });
  }

  fail405() {
    this.res.status(405).json({
      status: {
        code: 405,
        message: "Request method not allowed!",
      },
      data: null,
    });
  }

  fail500() {
    this.res.status(500).json({
      status: {
        code: 500,
        message: "Server error!",
      },
      data: null,
    });
  }
}

export default ResponseHandler;
