package br.com.alura.tabelafipe.service;

import br.com.alura.tabelafipe.model.Dados;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ConverteDadosTest {

    private final ConverteDados converte = new ConverteDados();

    @Test
    void deveConverterJsonEmObjetoDados() throws Exception {
        String json = "{\"codigo\":\"01\",\"nome\":\"Fiat\"}";
        Dados esperado = new Dados("01", "Fiat");
        try (MockWebServer server = new MockWebServer()) {
            server.enqueue(new MockResponse().setBody(json).setResponseCode(200));
            server.start();
            ConsumoAPI consumoAPI = new ConsumoAPI();
            String resposta = consumoAPI.obterDados(server.url("/dados").toString());
            Dados dados = converte.obterDados(resposta, Dados.class);
            assertEquals(esperado, dados);
        }
    }

    @Test
    void deveConverterJsonEmListaDeDados() {
        String json = "[{\"codigo\":\"01\",\"nome\":\"Fiat\"},{\"codigo\":\"02\",\"nome\":\"Ford\"}]";
        List<Dados> dados = converte.obterLista(json, Dados.class);
        assertEquals(2, dados.size());
        assertEquals(new Dados("01", "Fiat"), dados.get(0));
    }

    @Test
    void deveLancarExcecaoParaJsonInvalido() {
        String jsonInvalido = "{codigo:semAspas}";
        assertThrows(RuntimeException.class, () -> converte.obterDados(jsonInvalido, Dados.class));
    }
}
