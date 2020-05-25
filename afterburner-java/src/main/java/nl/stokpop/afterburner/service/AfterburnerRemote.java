package nl.stokpop.afterburner.service;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import nl.stokpop.afterburner.AfterburnerException;
import nl.stokpop.afterburner.AfterburnerProperties;
import nl.stokpop.afterburner.client.RemoteCallException;
import nl.stokpop.afterburner.client.RemoteCallHttpClient;
import nl.stokpop.afterburner.client.RemoteCallOkHttp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.CompletableFuture;

@Service
public class AfterburnerRemote {

    private final Counter counterTotalCalls;

    private final RemoteCallHttpClient httpClient;
    private final RemoteCallOkHttp okHttp;

    @Autowired
    public AfterburnerRemote(RemoteCallHttpClient httpClient, RemoteCallOkHttp okHttp, MeterRegistry registry, AfterburnerProperties props) {
        this.httpClient = httpClient;
        this.okHttp = okHttp;
        this.counterTotalCalls = registry.counter("remote.calls", "name", props.getAfterburnerName());
    }

    public String executeCall(@RequestParam(value = "path", defaultValue = "/") String path, @RequestParam(value = "type", defaultValue = "httpclient") String type) {

        counterTotalCalls.increment();

        try {
            switch (type) {
                case "httpclient":
                    return httpClient.call(path);
                case "okhttp":
                    return okHttp.call(path);
                default:
                    throw new RemoteCallException(String.format("Unknown remote call type [%s]", type));
            }
        } catch (RemoteCallException e) {
            throw new AfterburnerException("Call to remote url via HttpClient failed.", e);
        }
    }

    @Async
    public CompletableFuture<String> executeCallAsync(@RequestParam(value = "path", defaultValue = "/") String path, @RequestParam(value = "type", defaultValue = "httpclient") String type) {
        return CompletableFuture.completedFuture(executeCall(path, type));
    }
}