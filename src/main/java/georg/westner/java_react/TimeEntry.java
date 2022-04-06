package georg.westner.java_react;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TimeEntry {

    private String email;
    private String start;
    private String end;

    public TimeEntry(){

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    @Override
    public String toString() {
        return "Time Entry: " +
                "email=" + email + "'\'" +
                "start=" + start  + "'\'" +
                "end=" + end;
    }
}
