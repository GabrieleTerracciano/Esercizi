public class Libro extends Catalogo{

    private String autore;
    private String genere;

    public Libro(Integer isbn, String title, Integer numeroPagine, Integer annoPubblicazione, String genere, String autore) {
        super(isbn, title, numeroPagine, annoPubblicazione);
        this.genere = genere;
        this.autore = autore;
    }

    public String getAutore() {
        return autore;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "isbn=" + this.getIsbn() +
                ", titolo='" + this.getTitle() + '\'' +
                ", annoPubblicazione=" + this.getAnnoPubblicazione() +
                ", numeroPagine=" + this.getNumeroPagine() +
                ", autore='" + autore + '\'' +
                ", genere='" + genere + '\'' +
                '}';
    }
}
