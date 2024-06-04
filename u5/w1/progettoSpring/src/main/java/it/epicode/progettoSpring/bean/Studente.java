package it.epicode.progettoSpring.bean;

public class Studente {
    private String nome;

    private String Cognome;

    private String Indirizzo;

    public Studente() {
        
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return Cognome;
    }

    public void setCognome(String cognome) {
        Cognome = cognome;
    }

    public String getIndirizzo() {
        return Indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        Indirizzo = indirizzo;
    }

    public Studente(String nome, String cognome, String indirizzo) {
        this.nome = nome;
        Cognome = cognome;
        Indirizzo = indirizzo;
    }

    @Override
    public String toString() {
        return "Studente{" +
                "nome='" + nome + '\'' +
                ", Cognome='" + Cognome + '\'' +
                ", Indirizzo='" + Indirizzo + '\'' +
                '}';
    }
}

