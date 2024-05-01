public class Main {

    public static void main(String[] args) {
        Archivio archivio = new Archivio();
        Libro l1 = new Libro(1,"titolo1",165,2015,"Horror","Gianfranco");
        Libro l2 = new Libro(1,"titolo2",165,2015,"Horror","Paolo");
        Libro l3 = new Libro(2,"titolo3",363,1995,"Horror","Giulia");
        Libro l4 = new Libro(3,"titolo4",165,2013,"Horror","Gianfranco");
        Libro l5 = new Libro(4,"titolo5",165,2006,"Horror","Gianfranco");

        Rivista r1 = new Rivista(5,"titolo6",45,2017,Periodicita.SEMESTRALE);
        Rivista r2 = new Rivista(5,"titolo6",45,2017,Periodicita.MENSILE);
        Rivista r3 = new Rivista(6,"titolo6",45,2017,Periodicita.MENSILE);
        Rivista r4 = new Rivista(7,"titolo6",45,2017,Periodicita.SEMESTRALE);
        Rivista r5 = new Rivista(8,"titolo6",45,2017,Periodicita.SETTIMANALE);

        archivio.aggiungiElemento(l1);
        archivio.aggiungiElemento(l2);
        archivio.aggiungiElemento(l3);
        archivio.aggiungiElemento(l4);
        archivio.aggiungiElemento(l5);
        archivio.aggiungiElemento(r1);
        archivio.aggiungiElemento(r2);
        archivio.aggiungiElemento(r3);
        archivio.aggiungiElemento(r4);
        archivio.aggiungiElemento(r5);

        archivio.rimuoviElemento(6);
        archivio.rimuoviElemento(9);

        System.out.println(archivio.ricercaPerIsbn(2));

        archivio.ricercaPerAnno(2017).forEach(System.out::println);


        archivio.ricercaPerAutore("Gianfranco").forEach(System.out::println);
    }
}
