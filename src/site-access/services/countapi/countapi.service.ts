import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountapiService {
  private url = process.env.COUNT_API_URL;
  private namespace = process.env.COUNT_API_NAMESPACE;
  private key = process.env.COUNT_API_KEY;

  private extractData = (res) => res.data;

  hits() {
    return axios
      .get(`${this.url}/hit/${this.namespace}/${this.key}`)
      .then(this.extractData);
  }
}
