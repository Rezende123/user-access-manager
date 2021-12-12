import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HitAdapter } from '../../adapters/hit.adapter';

/**
 * @class CountapiService
 * @description Interage com o Count Api para incrementar e retornar a quantidade de acessos ao site
 */
@Injectable()
export class CountapiService {
  private url = process.env.COUNT_API_URL;
  private namespace = process.env.COUNT_API_NAMESPACE;
  private key = process.env.COUNT_API_KEY;

  private extractData = (response) => response.data;

  /**
   * @method hits
   * @returns Objeto que informa a quantidade de acessos acumulada na Count Api
   */
  hits(): Promise<HitAdapter> {
    return axios
      .get(`${this.url}/get/${this.namespace}/${this.key}`)
      .then(this.extractData)
      .then((data) => new HitAdapter(data));
  }

  /**
   * @method hit
   * @description Incrementa a quantidade de acessos acumulada na Count Api
   * @returns Objeto que informa a quantidade de acessos acumulada na Count Api
   */
  hit(): Promise<HitAdapter> {
    return axios
      .get(`${this.url}/hit/${this.namespace}/${this.key}`)
      .then(this.extractData)
      .then((data) => new HitAdapter(data));
  }
}
