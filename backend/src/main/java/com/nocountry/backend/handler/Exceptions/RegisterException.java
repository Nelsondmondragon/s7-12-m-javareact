package com.nocountry.backend.handler.Exceptions;

import com.nocountry.backend.handler.ErrorCode;

public class RegisterException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String errMsgKey;

    private final String errorCode;

    public RegisterException(ErrorCode code) {
        super(code.getErrMsgKey());
        this.errMsgKey = code.getErrMsgKey();
        this.errorCode = code.getErrCode();
    }

    public RegisterException(final String message) {
        super(message);
        this.errMsgKey = ErrorCode.REGISTER_BAD_REQUEST.getErrMsgKey();
        this.errorCode = ErrorCode.REGISTER_BAD_REQUEST.getErrCode();
    }

    public String getErrMsgKey() {
        return errMsgKey;
    }

    public String getErrorCode() {
        return errorCode;
    }
}
