public class Catalogo {
    private Integer isbn;
    private String title;
    private Integer annoPubblicazione;
    private Integer numeroPagine;

    public Catalogo(Integer isbn, String title, Integer numeroPagine, Integer annoPubblicazione) {
        this.isbn = isbn;
        this.title = title;
        this.numeroPagine = numeroPagine;
        this.annoPubblicazione = annoPubblicazione;
    }

    public Integer getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public Integer getIsbn() {
        return isbn;
    }

    public String getTitle() {
        return title;
    }

    public Integer getNumeroPagine() {
        return numeroPagine;
    }

    public void setNumeroPagine(Integer numeroPagine) {
        this.numeroPagine = numeroPagine;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAnnoPubblicazione(Integer annoPubblicazione) {
        this.annoPubblicazione = annoPubblicazione;
    }

    @Override
    public String toString() {
        return "Catalogo{" +
                "isbn=" + isbn +
                ", title='" + title + '\'' +
                ", annoPubblicazione=" + annoPubblicazione +
                ", numeroPagine=" + numeroPagine +
                '}';
    }
}
