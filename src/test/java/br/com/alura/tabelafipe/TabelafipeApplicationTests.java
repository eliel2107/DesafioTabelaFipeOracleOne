package br.com.alura.tabelafipe;

import br.com.alura.tabelafipe.model.Dados;
import br.com.alura.tabelafipe.service.ConverteDados;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TabelafipeApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void testConverteDadosObterLista() {
        String json = """
                [
                  {"codigo": "1", "nome": "Modelo A"},
                  {"codigo": "2", "nome": "Modelo B"}
                ]
                """;

        ConverteDados conversor = new ConverteDados();
        List<Dados> dados = conversor.obterLista(json, Dados.class);

        assertEquals(2, dados.size());
        assertEquals("1", dados.get(0).codigo());
        assertEquals("Modelo A", dados.get(0).nome());
        assertEquals("2", dados.get(1).codigo());
        assertEquals("Modelo B", dados.get(1).nome());
    }

}
