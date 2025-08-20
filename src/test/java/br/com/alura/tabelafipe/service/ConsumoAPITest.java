package br.com.alura.tabelafipe.service;

import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ConsumoAPITest {

    @Test
    void deveRetornarJsonDaAPI() throws Exception {
        String expectedJson = "{\"mensagem\":\"ok\"}";
        try (MockWebServer server = new MockWebServer()) {
            server.enqueue(new MockResponse().setBody(expectedJson).setResponseCode(200));
            server.start();

            ConsumoAPI consumoAPI = new ConsumoAPI();
            String url = server.url("/dados").toString();
            String json = consumoAPI.obterDados(url);

            assertEquals(expectedJson, json);
        }
    }

    @Test
    void deveLancarExcecaoQuandoServidorInacessivel() {
        ConsumoAPI consumoAPI = new ConsumoAPI();
        String url = "http://localhost:9999/inexistente";
        assertThrows(RuntimeException.class, () -> consumoAPI.obterDados(url));
    }
}
