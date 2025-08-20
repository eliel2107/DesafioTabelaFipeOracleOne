package br.com.alura.tabelafipe;
import br.com.alura.tabelafipe.principal.Principal;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TabelafipeApplication implements CommandLineRunner {

        private final Principal principal;

        public TabelafipeApplication(Principal principal) {
                this.principal = principal;
        }

        public static void main(String[] args) {
                SpringApplication.run(TabelafipeApplication.class, args);
        }
 codex/annotate-principal-with-@component-and-inject


        @Override
        public void run(String... args) {
                principal.exibeMenu();
        }
 main

        @Override
        public void run(String... args) {
                principal.exibeMenu();
        }
}
