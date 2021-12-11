import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HitAdapter } from 'src/site-access/adapters/hit.adapter';

@Injectable()
export class CountapiService {
  private url = process.env.COUNT_API_URL;
  private namespace = process.env.COUNT_API_NAMESPACE;
  private key = process.env.COUNT_API_KEY;

  private extractData = (res) => res.data;

  hits(): Promise<HitAdapter> {
    return axios
      .get(`${this.url}/get/${this.namespace}/${this.key}`)
      .then(this.extractData)
      .then((data) => new HitAdapter(data));
  }

  hit(): Promise<HitAdapter> {
    return axios
      .get(`${this.url}/hit/${this.namespace}/${this.key}`)
      .then(this.extractData)
      .then((data) => new HitAdapter(data));
  }
}
