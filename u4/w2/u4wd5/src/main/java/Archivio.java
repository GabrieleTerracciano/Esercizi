import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

public class Archivio {

    private List<Catalogo> archivio;

    public Archivio() {
        this.archivio = new ArrayList<Catalogo>();
    }
    public void aggiungiElemento(Catalogo prodotto){

        if (archivio.stream().noneMatch(p->p.getIsbn().equals(prodotto.getIsbn()))){
            archivio.add(prodotto);
            System.out.println("Prodotto aggiunto");
        }

        else {
            System.err.println("Prodotto già esistente: "+ prodotto.getIsbn());
        }

    }

    public void rimuoviElemento(Integer isbn){

        if (archivio.removeIf(elemento->elemento.getIsbn().equals(isbn))){
            System.out.println("Elemento Rimosso");
        }
        else {
            System.err.println("Elemento non rimosso");
        }

    }

    public Optional<Catalogo> ricercaPerIsbn(Integer isbn){
        Optional<Catalogo> elemento = archivio.stream()
                .filter(e->e.getIsbn().equals(isbn))
                .findFirst();
        return elemento;
    }

    public List<Catalogo> ricercaPerAnno(Integer anno){
        List<Catalogo> elementi = (List<Catalogo>) archivio.stream()
                .filter(e-> Objects.equals(e.getAnnoPubblicazione(), anno))
                .toList();
        return elementi;
    }

    public List<Catalogo> ricercaPerAutore(String autore) {
        List<Catalogo> elementi = (List<Catalogo>) archivio.stream()
                .filter(e-> e instanceof Libro)
                .filter(e->Objects.equals(((Libro) e).getAutore(), autore))
                .toList();
        return elementi;
    }

}
