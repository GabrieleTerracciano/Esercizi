package ex1;

import java.util.Scanner;

public class Rettangolo2 {
    private double lunghezza2;
    public double larghezza2;

    public Rettangolo2() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Inserisci la lunghezza del secondo rettangolo: ");
        this.lunghezza2 = scanner.nextDouble();
        System.out.print("Inserisci la larghezza del secondo rettangolo: ");
        this.larghezza2 = scanner.nextDouble();
    }

    public double getLunghezza2() {
        return lunghezza2;
    }

    public double getLarghezza2() {
        return larghezza2;
    }

    public double calcolaArea2() {
        return lunghezza2 * larghezza2;
    }

    public double calcolaPerimetro2() {
        return (lunghezza2 + larghezza2) * 2;
    }

    public double getArea2() {
        return calcolaArea2();
    }

    public double getPerimetro2() {
        return calcolaPerimetro2();
    }
}

