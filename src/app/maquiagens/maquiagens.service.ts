import { Injectable } from '@angular/core';
import { Maquiagem } from './maquiagem/maquiagem.model';


@Injectable({
  providedIn: 'root'
})
export class MaquiagensService {

  rests: Maquiagem[] = [
    {
      id:"PAYOT",
      name: "+ PAYOT",
      descricao: "Base Líquida Matte HD Boca Rosa Beauty by Payot 3 - Francisca",
      valor: "R$ 35,99",
      rating: 5.0,
      imagePath: "assets/img/maquiagens/base.jpg"
    },
    {
      id: "BRUNA TAVARES",
      name: "+ BRUNA TAVARES",
      descricao: "Bt Gloss Marina Bruna Tavares - 3,5ml",
      valor: "R$ 35,59",
      rating: 2.0,
      imagePath: "assets/img/maquiagens/gloss.jpg"
    },
    {
      id: "ANITA",
      name: "+ ANITA",
      descricao: "Esmalte Anita Cremoso - Dubai",
      valor: "R$ 4,99",
      rating: 4.9,
      imagePath: "assets/img/maquiagens/esmalte.jpg"
    },
    {
      id: "RISQUÉ",
      name: "+ RISQUÉ",
      descricao: "Esmalte Top Coat Fixador Risqué Diamond Gel Cremoso - 9,5ml",
      valor: "R$ 10,49 ",
      rating: 4.6,
      imagePath: "assets/img/maquiagens/esmalte2.jpg"
    },
    {
      id: "BIO EXTRATUS",
      name: "+ BIO EXTRATUS",
      descricao: "Máscara Capilar Bio Extratus - Mais Liso",
      valor: "R$ 28,29",
      rating: 5.0,
      imagePath: "assets/img/maquiagens/mascara.jpg"
    },
    {
      id: "PAYOUT",
      name: "+ PAYOUT",
      descricao: "Corretivo Líquido Boca Rosa Beauty by Payot Máxima Cobertura 1 - Jasmin",
      valor: "R$ 27,90",
      rating: 5.0,
      imagePath: "assets/img/maquiagens/corretivo.jpg"
    },
    {
      id: "BRUNA TAVARES",
      name: "+ BRUNA TAVARES",
      descricao: "BT Contorno Taupe Chic Bruna Tavares Blush Contour - 5g",
      valor: "R$ 42,59",
      rating: 2.0,
      imagePath: "assets/img/maquiagens/contorno.jpg"
    },
    {
      id: "LORÉAL",
      name: "+ LORÉAL",
      descricao: "Protetor Solar Facial L'Oréal Solar Expertise Toque Seco FPS 30 - 50g",
      valor: "R$ 45,09",
      rating: 5.0,
      imagePath: "assets/img/maquiagens/protetor.jpg"
    },
    {
      id: "BIO EXTRATUS",
      name: "+ BIO EXTRATUS",
      descricao: "Condicionador Bio Extratus Mais Liso - 350ml",
      valor: "R$ 36,79",
      rating: 3.9,
      imagePath: "assets/img/maquiagens/cond.jpg"
    }
];
  constructor() { }

  maquiagens() : Maquiagem[] {
    return this.rests;
  }
}
