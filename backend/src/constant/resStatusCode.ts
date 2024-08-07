enum RES_STATUS_CODE {
  RS200 = 200,
  RS201 = 201,
  RS202 = 202,
  RS203 = 203,
  RS302 = 302,
  RS400 = 400,
  RS401 = 401,
  RS402 = 402,
  RS403 = 403,
  RS404 = 404,
  RS408 = 408,
  RS500 = 500,
}

enum RES_STATUS_MESSAGE {
  RS200 = "Ok",
  RS201 = "Created",
  RS202 = "Accepted",
  RS203 = "Inserted",
  RS302 = "Found",
  RS400 = "Bad_Request",
  RS401 = "Unauthorized",
  RS403 = "Forbidden",
  RS404 = "Not_Found",
  RS408 = "Request_Timeout",
  RS500 = "Internal_Server_Error",
}

export { RES_STATUS_CODE, RES_STATUS_MESSAGE };
