package Catagolo.Dao;

import Catagolo.Entity.Catalogo;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import java.util.UUID;

public class CatalogoDao {
    private EntityManager em;

    public CatalogoDao(EntityManager em) {
        this.em = em;
    }

    // 1. metodo per SALVARE un elemento nel database
    public void save(Catalogo catalogo) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.persist(catalogo);
        et.commit();
    }

    public Catalogo getByISBN(UUID ISBN) {
        return em.find(Catalogo.class, ISBN);
    }


    //2. metodo per ELIMINARE un elemento dal database dato un codice ISBN
    public void delete(UUID ISBN) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        Catalogo catalogo = getByISBN(ISBN);

        if (catalogo != null) {
            em.remove(catalogo);
        } else {
            System.out.println("L'elemento che si vuole eliminare non è presente");
        }

        et.commit();
    }
}
