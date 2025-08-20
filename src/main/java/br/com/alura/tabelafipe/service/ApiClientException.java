package br.com.alura.tabelafipe.service;

public class ApiClientException extends RuntimeException {
    public ApiClientException(String message, Throwable cause) {
        super(message, cause);
    }
}

