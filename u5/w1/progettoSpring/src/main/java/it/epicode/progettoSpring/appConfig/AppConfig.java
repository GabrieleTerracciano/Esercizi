package it.epicode.progettoSpring.appConfig;

import it.epicode.progettoSpring.bean.Computer;
import it.epicode.progettoSpring.bean.Studente;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class AppConfig {

    @Primary
    @Bean("Carla")
    public Studente getStudente(){
        Studente studente = new Studente();
        studente.setNome =("Carla");
        studente.setCognome("Sordi");
        studente.setIndirizzo("Via Turdi");
    return studente;
    }

    @Bean("Franco")
    public Studente getStudente2(){
        Studente studente = new Studente();
        studente.setNome =("Franco");
        studente.setCognome("Svizzero");
        studente.setIndirizzo("Via Ciardi");
        return studente;
    }

    public Computer getComputer(){
        Computer computer = new Computer();
        Computer.setMarca("HP");
        computer.setRam(16);
        computer.setMonitor(27);
        return computer;
    }
}
