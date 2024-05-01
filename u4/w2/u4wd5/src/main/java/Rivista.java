public class Rivista extends Catalogo{

    private Periodicita periodicita;

    public Rivista(Integer isbn, String title, Integer numeroPagine, Integer annoPubblicazione, Periodicita periodicita) {
        super(isbn, title, numeroPagine, annoPubblicazione);
        this.periodicita = periodicita;
    }

    public Periodicita getPeriodicita() {
        return periodicita;
    }

    public void setPeriodicita(Periodicita periodicita) {
        this.periodicita = periodicita;
    }

    @Override
    public String toString() {
        return "Rivista{" +
                "isbn=" + this.getIsbn() +
                ", titolo='" + this.getTitle() + '\'' +
                ", annoPubblicazione=" + this.getAnnoPubblicazione() +
                ", numeroPagine=" + this.getNumeroPagine() +
                ", periodicita=" + periodicita +
                '}';
    }
}
