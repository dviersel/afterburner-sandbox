package com.stokpop.afterburner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.time.format.DateTimeParseException;

@RestController
public class DelayedResponse {

    private static final Logger log = LoggerFactory.getLogger(DelayedResponse.class);

    private final String name;

    public DelayedResponse(
            @Value(value = "#{systemProperties['afterburner.name'] ?: 'Simply-Anonymous'}") final String name) {
        this.name = name;
    }

    @RequestMapping("/delay")
    public BurnerHello delay(@RequestParam(value = "duration", defaultValue = "100") String duration) {
        long sleepInMillis;
        if (duration.startsWith("P")) {
            sleepInMillis = determineISO8601DurationInMillis(duration);
        }
        else {
            try {
                sleepInMillis = Long.parseLong(duration);
            } catch (NumberFormatException e) {
                throw new AfterburnerException(String.format("Not a valid duration [%s]", duration), e);
            }
        }
        log.info("About to sleep for [{}] millis (duration = [{}]).", sleepInMillis, duration);
        try {
            Thread.sleep(sleepInMillis);
        } catch (InterruptedException e) {
            log.warn("Sleep received interrupt: {}", e.getMessage());
        }
        return new BurnerHello(String.format("This was a delay of %s", duration), name, sleepInMillis);
    }

    private long determineISO8601DurationInMillis(String duration) {
        Duration parsedDuration;
        try {
            parsedDuration = Duration.parse(duration);
        } catch (DateTimeParseException e) {
            throw new AfterburnerException(String.format("Not a valid duration [%s]", duration), e);
        }
        long seconds = parsedDuration.getSeconds();
        int nanos = parsedDuration.getNano();
        return seconds * 1_000 + nanos / 1_000_000;
    }


}
