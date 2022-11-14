import { Component, OnInit } from '@angular/core';
const YTPlayer = require('yt-player')
@Component({
  selector: 'pro-training-video',
  templateUrl: './training-video.component.html',
  styleUrls: ['./training-video.component.scss']
})
export class TrainingVideoComponent implements OnInit {
  training:any =
  {
    id: 1,
    url: 'https://certificadocursosonline.com/wp-content/uploads/2018/07/Curso-de-Manutenc%CC%A7a%CC%83o-de-Computadores.jpg',
    title: 'Curso de Manutenção de Computadores',
    description:
      'Architecto eaque consectetur nostrum impedit earum at harum. Reiciendis suscipit soluta, ab, repellat ad',
    teacher: 'Carlos Silva',
    duration: 20,
    status: 'disponivel',
    category: 'tecnologia',
    modules:[
      {
        moduleId: '1',
        titleModule:'Módulo 1',
        link: 'vbs7jKRMuiA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Lorem ipsum dolor sit amet consectetur.',
        statusModule: 'finalizado'
      },
      {
        moduleId: '2',
        titleModule:'Módulo 2',
        link: '3CC_YtyD7Po',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Incidunt reiciendis vel asperiores.',
        statusModule: 'disponivel'
      },
      {
        moduleId: '3',
        titleModule:'Módulo 3',
        link: 'vbs7jKRMuiA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Ullam, quisquam? Culpa doloremque.',
        statusModule: 'disponivel'
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.chamarVideo();
  }

  

  chamarVideo(){
    const player = new YTPlayer('#player', {
      timeupdateFrequency: 5000
    })

    player.load(this.training.modules[1].link) // https://youtube.com/embed/
    player.setVolume(10)

    let progressBar:any
    let totalPorcent:number;
    let totalVideo:number;
    let tempoAtual:number;
    let porcent:number;
    let varAux:number;
    let idDinamico:any;
    
    player.on('timeupdate', () => {
      progressBar = document.getElementById(this.training.modules[1].moduleId);
      idDinamico = document.getElementById(this.training.modules[1].link)
      totalPorcent = 100;
      totalVideo = Math.round(player.getDuration());
      tempoAtual = Math.round(player.getCurrentTime());
      porcent = Math.round((totalPorcent* tempoAtual) / totalVideo);

      varAux = progressBar.style.width.slice(0, progressBar.style.width.length -1);

      console.log(varAux)
      console.log(porcent)
      
      if(varAux <= porcent && porcent <= 100){
        progressBar.style.width = `${porcent}%`;
      }

      if(porcent>95){

       idDinamico.style.visibility= 'hidden'
        
        
      }
    })

    player.on('ended', () => {
      this.training.modules[1].statusModule = 'finalizado'
    })
    
  }

}
