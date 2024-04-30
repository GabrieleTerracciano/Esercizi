public class Rivista extends Catalogo{

    private Periodicita periodicita;

    public Rivista(Integer isbm, String title, Integer numeroPagine, Integer annoPubblicazione, Periodicita periodicita) {
        super(isbm, title, numeroPagine, annoPubblicazione);
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
                "periodicita=" + periodicita +
                '}';
    }
}
