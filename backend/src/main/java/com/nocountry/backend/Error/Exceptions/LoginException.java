package com.nocountry.backend.Error.Exceptions;

import com.nocountry.backend.Error.ErrorCode;

public class LoginException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String errMsgKey;

    private final String errorCode;

    public LoginException(ErrorCode code) {
        super(code.getErrMsgKey());
        this.errMsgKey = code.getErrMsgKey();
        this.errorCode = code.getErrCode();
    }

    public LoginException(final String message) {
        super(message);
        this.errMsgKey = ErrorCode.LOGIN_BAD_CREDENTIALS.getErrMsgKey();
        this.errorCode = ErrorCode.LOGIN_BAD_CREDENTIALS.getErrCode();
    }

    public String getErrMsgKey() {
        return errMsgKey;
    }

    public String getErrorCode() {
        return errorCode;
    }
}
