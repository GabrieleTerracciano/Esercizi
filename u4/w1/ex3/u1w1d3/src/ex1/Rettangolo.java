package ex1;

import java.util.Scanner;

public class Rettangolo {
    private double lunghezza = getLunghezza();
    private double larghezza = getLarghezza();

    public Rettangolo() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Inserisci la lunghezza del rettangolo: ");
        this.lunghezza = scanner.nextDouble();
        System.out.print("Inserisci la larghezza del rettangolo: ");
        this.larghezza = scanner.nextDouble();
    }

    public double getLunghezza() {
        return lunghezza;
    }

    public double getLarghezza() {
        return larghezza;
    }

    public double calcolaArea() {
        return lunghezza * larghezza;
    }

    public double calcolaPerimetro() {
        return (lunghezza + larghezza) * 2;
    }

    public double getArea() {
        return calcolaArea();
    }

    public double getPerimetro() {
        return calcolaPerimetro();
    }
}



