package br.com.alura.tabelafipe.controller;

import br.com.alura.tabelafipe.model.Dados;
import br.com.alura.tabelafipe.model.Modelos;
import br.com.alura.tabelafipe.service.ConsumoAPI;
import br.com.alura.tabelafipe.service.ConverteDados;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FipeController {

    private static final String URL_BASE = "https://parallelum.com.br/fipe/api/v1/";
    private final ConsumoAPI consumo = new ConsumoAPI();
    private final ConverteDados conversor = new ConverteDados();

    @GetMapping("/{tipo}/marcas")
    public List<Dados> listarMarcas(@PathVariable String tipo) {
        var json = consumo.obterDados(URL_BASE + tipo + "/marcas");
        return conversor.obterLista(json, Dados.class);
    }

    @GetMapping("/{tipo}/marcas/{codigo}/modelos")
    public Modelos listarModelos(@PathVariable String tipo, @PathVariable String codigo) {
        var json = consumo.obterDados(URL_BASE + tipo + "/marcas/" + codigo + "/modelos");
        return conversor.obterDados(json, Modelos.class);
    }

    @GetMapping("/{tipo}/marcas/{codigo}/modelos/{modelo}/anos")
    public List<Dados> listarAnos(@PathVariable String tipo,
                                  @PathVariable String codigo,
                                  @PathVariable String modelo) {
        var json = consumo.obterDados(URL_BASE + tipo + "/marcas/" + codigo + "/modelos/" + modelo + "/anos");
        return conversor.obterLista(json, Dados.class);
    }
}
