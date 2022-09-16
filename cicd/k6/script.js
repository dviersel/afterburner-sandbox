    /*
 * Spring Boot REST API
 * Afterburner REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: peter.paul.bakker[at]stokpop.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 5.4.0-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data';


const firstNames = new SharedArray('another data name', function () {
    // Load CSV file and parse it using Papa Parse
    return papaparse.parse(open('./first_names.csv'), { header: true }).data;
});

const BASE_URL = __ENV.TARGET_BASE_URL;
const testRunId = __ENV.TEST_RUN_ID;
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.



export const options = {
    discardResponseBodies: true,
    scenarios: {
        afterburner: {
            executor: 'ramping-arrival-rate',
            startRate: __ENV.START_RATE,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            maxVUs: 500,
            stages: [
                { target: __ENV.TARGET_RATE, duration: __ENV.RAMPUP_TIME },
                { target: __ENV.TARGET_RATE, duration: __ENV.CONSTANT_LOAD_TIME },
            ],
        },
    },
    systemTags: ['proto', 'subproto', 'status', 'method', 'url', 'name', 'group', 'check', 'error', 'error_code', 'tls_version', 'scenario', 'service', 'expected_response', 'rpc_type', 'vu', 'iter'],
    tags: {
        system_under_test: __ENV.SYSTEM_UNDER_TEST,
        test_environment: __ENV.TEST_ENVIRONMENT,
    }
};


export default function() {
    // group("/memory/churn", () => {
    //     let duration = 'TODO_EDIT_THE_DURATION'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let objects = 'TODO_EDIT_THE_OBJECTS'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/memory/churn?duration=${duration}&objects=${objects}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/error", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/error`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/files/download/{filename}", () => {
    //     let filename = 'TODO_EDIT_THE_FILENAME'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/files/download/${filename}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("mind-my-business-s", () => {
    //     let duration = '250'; // specify value as there is no example value for this parameter in OpenAPI spec
    //
    //     const params1 = {
    //         headers: {
    //           'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=/mind-my-business-s`,
    //         },
    //     };
    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/mind-my-business-s?duration=${duration}`;
    //         let request = http.get(url, params1);
    //
    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/files/upload", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/files/upload`;
    //         let params = {headers: {"Content-Type": "multipart/form-data", "Accept": "*/*"}};
    //         let request = http.post(url, params);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //         check(request, {
    //             "Created": (r) => r.status === 201
    //         });
    //     }
    // });

    // group("/tcp/connect", () => {
    //     let port = 'TODO_EDIT_THE_PORT'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let timeoutMs = 'TODO_EDIT_THE_TIMEOUT-MS'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let host = 'TODO_EDIT_THE_HOST'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/tcp/connect?host=${host}&port=${port}&timeout-ms=${timeout-ms}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    group("simple_delay", () => {
        let duration = '350'; // specify value as there is no example value for this parameter in OpenAPI spec

         const params2 = {
            headers: {
              'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=simple_delay`,
            },
        };
        // Request No. 1
        {
            let url = BASE_URL + `/delay?duration=${duration}`;
            let request = http.get(url, params2);

            check(request, {
                "OK": (r) => r.status === 200
            });
        }
    });

    
    
    // group("secured-delay", () => {
    //     let duration = '200'; // specify value as there is no example value for this parameter in OpenAPI spec
    //
    //     const params = {
    //         headers: {
    //           'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=/secured-delay`,
    //         },
    //    };
    //
    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/secured-delay?duration=${duration}`;
    //         let request = http.get(url, params);
    //
    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/parallel", () => {
    //     let primeDelayMillis = 'TODO_EDIT_THE_PRIMEDELAYMILLIS'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let maxPrime = 'TODO_EDIT_THE_MAXPRIME'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/parallel?maxPrime=${maxPrime}&primeDelayMillis=${primeDelayMillis}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/parallel-info", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/parallel-info`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/memory/grow", () => {
    //     let objects = 'TODO_EDIT_THE_OBJECTS'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let length = 'TODO_EDIT_THE_LENGTH'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let items = 'TODO_EDIT_THE_ITEMS'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/memory/grow?items=${items}&length=${length}&objects=${objects}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/log-some", () => {
    //     let logSize = 'TODO_EDIT_THE_LOGSIZE'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let logLines = 'TODO_EDIT_THE_LOGLINES'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/log-some?logLines=${logLines}&logSize=${logSize}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });

    //         sleep(SLEEP_DURATION);
    //     }

    //     // Request No. 2
    //     {
    //         let url = BASE_URL + `/log-some?logLines=${logLines}`;
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, params);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //         check(request, {
    //             "Created": (r) => r.status === 201
    //         });
    //     }
    // });

    // group("/remote/call-traffic-light", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/remote/call-traffic-light`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/remote/call", () => {
    //     let path = 'TODO_EDIT_THE_PATH'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let type = 'TODO_EDIT_THE_TYPE'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/remote/call?path=${path}&type=${type}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    group("simple_cpu_burn", () => {
        let matrixSize = '133'; // specify value as there is no example value for this parameter in OpenAPI spec

        const params = {
            headers: {
                'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=simple_cpu_burn`,
            },
        };
        // Request No. 1
        {
            let url = BASE_URL + `/cpu/magic-identity-check?matrixSize=${matrixSize}`;
            let request = http.get(url);

            check(request, {
                "OK": (r) => r.status === 200
            });
        }
    });

    group("remote_call_delayed", () => {
        let path = 'delay'; // specify value as there is no example value for this parameter in OpenAPI spec
        let count = '3'; // specify value as there is no example value for this parameter in OpenAPI spec

         const params = {
            headers: {
              'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=remote_call_delayed`,
            },
       };

        // Request No. 1
        {
            let url = BASE_URL + `/remote/call-many?count=${count}&path=${path}`;
            let request = http.get(url, params);

            check(request, {
                "OK": (r) => r.status === 200
            });
        }
    });

    group("database_call", () => {
        const random = firstNames[Math.floor(Math.random() * firstNames.length)];

        let path = '/db/employee/find-by-name?firstName=${random.first_name}'; // specify value as there is no example value for this parameter in OpenAPI spec

        let count = '1'; // specify value as there is no example value for this parameter in OpenAPI spec

         const params = {
            headers: {
              'baggage': `perfana-test-run-id=${testRunId},perfana-request-name=database_call`,
            },
       };

        // Request No. 1
        {
            let url = BASE_URL + `/remote/call-many?count=${count}&path=${path}`;
            let request = http.get(url, params);

            check(request, {
                "OK": (r) => r.status === 200
            });
        }
    });

    // group("/memory/clear", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/memory/clear`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/fund/check", () => {
    //     let amount = 'TODO_EDIT_THE_AMOUNT'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let customer = 'TODO_EDIT_THE_CUSTOMER'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/fund/check?amount=${amount}&customer=${customer}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/remote/call-retry", () => {
    //     let path = 'TODO_EDIT_THE_PATH'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let type = 'TODO_EDIT_THE_TYPE'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/remote/call-retry?path=${path}&type=${type}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/system-info", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/system-info`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/basket/store", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/basket/store`;
    //         // TODO: edit the parameters of the request body.
    //         let body = {"customer": "string", "prices": "list", "products": "list", "totalPrice": "long"};
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, JSON.stringify(body), params);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //         check(request, {
    //             "Created": (r) => r.status === 201
    //         });
    //     }
    // });

    // group("/serial-stream", () => {
    //     let primeDelayMillis = 'TODO_EDIT_THE_PRIMEDELAYMILLIS'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let maxPrime = 'TODO_EDIT_THE_MAXPRIME'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/serial-stream?maxPrime=${maxPrime}&primeDelayMillis=${primeDelayMillis}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/mind-my-business", () => {
    //     let duration = 'TODO_EDIT_THE_DURATION'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/mind-my-business?duration=${duration}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/remote/call-circuit-breaker", () => {
    //     let path = 'TODO_EDIT_THE_PATH'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let type = 'TODO_EDIT_THE_TYPE'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/remote/call-circuit-breaker?path=${path}&type=${type}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/request-scope", () => {
    //     let duration = 'TODO_EDIT_THE_DURATION'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/request-scope?duration=${duration}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/flaky", () => {
    //     let flakiness = 'TODO_EDIT_THE_FLAKINESS'; // specify value as there is no example value for this parameter in OpenAPI spec
    //     let maxRandomDelay = 'TODO_EDIT_THE_MAXRANDOMDELAY'; // specify value as there is no example value for this parameter in OpenAPI spec

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/flaky?flakiness=${flakiness}&maxRandomDelay=${maxRandomDelay}`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/basket/all", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/basket/all`;
    //         let request = http.get(url);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //     }
    // });

    // group("/basket/purchase", () => {

    //     // Request No. 1
    //     {
    //         let url = BASE_URL + `/basket/purchase`;
    //         // TODO: edit the parameters of the request body.
    //         let body = {"customer": "string", "prices": "list", "products": "list", "totalPrice": "long"};
    //         let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
    //         let request = http.post(url, JSON.stringify(body), params);

    //         check(request, {
    //             "OK": (r) => r.status === 200
    //         });
    //         check(request, {
    //             "Created": (r) => r.status === 201
    //         });
    //     }
    // });

}