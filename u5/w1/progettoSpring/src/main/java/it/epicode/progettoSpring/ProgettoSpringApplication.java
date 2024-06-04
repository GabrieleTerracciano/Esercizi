package it.epicode.progettoSpring;

import it.epicode.progettoSpring.appConfig.AppConfig;
import it.epicode.progettoSpring.bean.Studente;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class ProgettoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgettoSpringApplication.class, args);
	}

	ApplictionContext ctx = new ClassPathXmlApplicationContext("")

	ApplictionContext ctx = AnnotationConfigApplicationContext(AppConfig.class);

	Studente studente = ctx.getBean("Carla",Studente.class);

	Studente Studente2 = ctx.getBean("Franco",Studente.class);

	System.out.PrintIn(studente);

	System.out.PrintIn(studente2);


}
