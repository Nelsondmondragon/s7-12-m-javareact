package com.nocountry.backend.Error.Exceptions;

import com.nocountry.backend.Error.ErrorCode;

public class GenericNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    private final String errMsgKey;
    private final String errorCode;

    public GenericNotFoundException(ErrorCode code) {
        super(code.getErrMsgKey());
        this.errMsgKey = code.getErrMsgKey();
        this.errorCode = code.getErrCode();
    }

    public GenericNotFoundException(final String message) {
        super(message);
        this.errMsgKey = ErrorCode.ENTITY_NOT_FOUND.getErrMsgKey();
        this.errorCode = ErrorCode.ENTITY_NOT_FOUND.getErrCode();
    }

    public String getErrMsgKey() {
        return errMsgKey;
    }

    public String getErrorCode() {
        return errorCode;
    }
}
