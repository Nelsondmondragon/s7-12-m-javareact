package com.nocountry.backend.Error.Exceptions;

import java.io.Serial;

import com.nocountry.backend.Error.ErrorCode;

public class OverlappedBookingException extends RuntimeException {

    @Serial
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
