package it.epicode.progettoSpring.bean;

import lombok.Data;

@Data
public class Computer extends Dispositivo{

    private int monitor;
    private  String cpu;
    private int ram;
}
