import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 200,
  duration: '180s',
};
export default function () {
  http.get('http://pbil.htunnthuthu.tech/hello');
  sleep(1);
}

