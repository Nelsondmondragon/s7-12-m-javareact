package com.nocountry.backend.handler.Exceptions;

import com.nocountry.backend.handler.ErrorCode;

public class OverlappedBookingException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private final String errMsgKey;

    private final String errorCode;

    public OverlappedBookingException(ErrorCode code) {
        super(code.getErrMsgKey());
        this.errMsgKey = code.getErrMsgKey();
        this.errorCode = code.getErrCode();
    }

    public OverlappedBookingException(final String message) {
        super(message);
        this.errMsgKey = ErrorCode.OVERLAPPED_BOOKING.getErrMsgKey();
        this.errorCode = ErrorCode.OVERLAPPED_BOOKING.getErrCode();
    }

    public String getErrMsgKey() {
        return errMsgKey;
    }

    public String getErrorCode() {
        return errorCode;
    }
}
