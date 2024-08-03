import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 }, // Simulate ramp-up of traffic from 1 to 20 users over 30 seconds.
    { duration: '1m', target: 20 }, // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 }, // Ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
  },
};

export default function () {
  let res = http.get('http://localhost:80/hello');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}