package com.nocountry.backend.Error;

import java.time.Instant;

import org.apache.logging.log4j.util.Strings;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Error {

    private static final long serialVersionUID = 1L;

    private String errorCode;

    private String message;

    private Integer status;

    private String url = "Not available";

    private String reqMethod = "Not available";

    private Instant timestamp;

    public Error setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public Error setUrl(String url) {
        if (Strings.isNotBlank(url)) {
            this.url = url;
        }
        return this;
    }

    public Error setReqMethod(String method) {
        if (Strings.isNotBlank(method)) {
            this.reqMethod = method;
        }
        return this;
    }
}