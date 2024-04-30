import java.util.ArrayList;
import java.util.List;

public class Archivio {

    private List<Catalogo> archivio;

    public Archivio() {
        this.archivio = new ArrayList<Catalogo>();
    }
    public void aggiungiElemento(Catalogo prodotto){

        if (archivio.stream().noneMatch(p->p.getIsbm().equals(prodotto.getIsbm()))){
            archivio.add(prodotto);
            System.out.println("Prodotto aggiunto");
        }

        else {
            System.err.println("Prodotto già esistente: "+ prodotto.getIsbm());
        }

    }

}
