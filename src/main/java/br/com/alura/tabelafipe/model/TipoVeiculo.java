package br.com.alura.tabelafipe.model;

public enum TipoVeiculo {
    CARRO("carros"),
    MOTO("motos"),
    CAMINHAO("caminhoes");

    private final String tipo;

    TipoVeiculo(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}
