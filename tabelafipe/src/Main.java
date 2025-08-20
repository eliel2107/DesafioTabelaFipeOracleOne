/**
 * Classe principal responsável por iniciar a aplicação de exemplo.
 * Exibe uma mensagem de boas-vindas e números de 1 a 5 no console.
 */
public class Main {
    public static void main(String[] args) {
        System.out.printf("Hello and welcome!");

        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }
    }
}

