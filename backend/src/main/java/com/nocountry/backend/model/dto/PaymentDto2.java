package com.nocountry.backend.model.dto;

import java.util.Date;

public class PaymentDto2 {
    private long idPayments;
    private String paymentStatus;
    private Date paymentDate;
    private String stripePaymentId;

    public long getIdPayments() {
        return idPayments;
    }

    public void setIdPayments(long idPayments) {
        this.idPayments = idPayments;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getStripePaymentId() {
        return stripePaymentId;
    }

    public void setStripePaymentId(String stripePaymentId) {
        this.stripePaymentId = stripePaymentId;
    }
}
