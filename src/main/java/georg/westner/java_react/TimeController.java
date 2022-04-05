package georg.westner.java_react;

import com.fasterxml.jackson.databind.JsonNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@RestController
class TimeController {

    private static final Logger log = LoggerFactory.getLogger(TimeController.class);

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @GetMapping(value="/time/{email}")
    TimeEntry[] getTimeByEmail(@PathVariable String email) {
        RestTemplate restTemplate = new RestTemplate();
        String timeResourceUrl
                = "http://timetracker:8080/records?email=" + email;
        TimeEntry[] entries
                = restTemplate.getForObject(timeResourceUrl, TimeEntry[].class);
        return entries;
    }

    @PostMapping(value="/create", consumes = "application/json", produces = "application/json")
    ResponseEntity<String> createTimeEntry(@RequestBody TimeEntry timeentry) {

        System.out.println(timeentry);

        String createTimeUrl = "http://timetracker:8080/records";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("email", timeentry.getEmail());
        map.add("start", timeentry.getStart());
        map.add("end", timeentry.getEnd());

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
        System.out.println(request);

        ResponseEntity<String> response = restTemplate.postForEntity( createTimeUrl, request , String.class );

        return response;
    }

}
