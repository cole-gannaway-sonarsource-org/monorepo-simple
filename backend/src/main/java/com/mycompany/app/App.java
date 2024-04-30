package com.mycompany.app;

import java.security.SecureRandom;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        SecureRandom sr = new SecureRandom();
        sr.setSeed(123456L); // Noncompliant
        int v = sr.nextInt(32);
        System.out.println(v);
    }
}
