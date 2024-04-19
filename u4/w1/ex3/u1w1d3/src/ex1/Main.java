package ex1;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Rettangolo rettangolo = new Rettangolo();
        System.out.println("Lunghezza: " + rettangolo.getLunghezza());
        System.out.println("Larghezza: " + rettangolo.getLarghezza());
        System.out.println("Area: " + rettangolo.calcolaArea());
        System.out.println("Perimetro: " + rettangolo.calcolaPerimetro());

        Rettangolo2 rettangolo2 = new Rettangolo2();
        System.out.println("Lunghezza: " + rettangolo2.getLunghezza2());
        System.out.println("Larghezza: " + rettangolo2.getLarghezza2());
        System.out.println("Area: " + rettangolo2.calcolaArea2());
        System.out.println("Perimetro: " + rettangolo2.calcolaPerimetro2());

        double sommaArea = rettangolo.getArea() + rettangolo2.getArea2();
        double sommaPerimetri = rettangolo.getPerimetro() + rettangolo2.getPerimetro2();
        System.out.println("SommaArea: " + sommaArea);
        System.out.println("SommaPerimetro: " + sommaPerimetri);
    }
}