package georg.westner.java_react;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
class TimeController {

    private static final Logger log = LoggerFactory.getLogger(TimeController.class);

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @GetMapping(value="/time")
    TimeEntry[] getTimeByEmail() {
        RestTemplate restTemplate = new RestTemplate();
        String timeResourceUrl
                = "http://0.0.0.0:8080/records?email=aliriza.saral@gmail.com";
        TimeEntry[] entries
                = restTemplate.getForObject(timeResourceUrl, TimeEntry[].class);
        return entries;
    }
}
