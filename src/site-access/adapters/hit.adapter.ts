/**
 * @class HitAdapter
 * @description Torna mais simples o entendimento da informação a retornada pela api
 */
export class HitAdapter {
  acessos: string;
  constructor(data: any) {
    this.acessos = data.value;
  }
}
