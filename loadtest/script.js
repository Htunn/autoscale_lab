import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 200,
  duration: '60s',
};
export default function () {
  http.get('http://localhost/hello');
  sleep(1);
}

