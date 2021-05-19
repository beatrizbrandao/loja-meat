import { Component, OnInit } from '@angular/core';
import { Maquiagem } from './maquiagem/maquiagem.model';
import { MaquiagensService } from './maquiagens.service';

@Component({
  selector: 'app-maquiagens',
  templateUrl: './maquiagens.component.html',
  styleUrls: ['./maquiagens.component.css']
})
export class MaquiagensComponent implements OnInit {


  maquiagens: Maquiagem[];

  constructor(private maquiagensService: MaquiagensService) { }

  ngOnInit(): void {
    this.maquiagens = this.maquiagensService.maquiagens();
    console.log(this.maquiagens);
  }

}
