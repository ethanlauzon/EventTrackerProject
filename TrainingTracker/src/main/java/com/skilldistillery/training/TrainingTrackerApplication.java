package com.skilldistillery.training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class TrainingTrackerApplication extends SpringBootServletInitializer{

	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(TrainingTrackerApplication.class);
	  }
	
	public static void main(String[] args) {
		SpringApplication.run(TrainingTrackerApplication.class, args);
	}

}
