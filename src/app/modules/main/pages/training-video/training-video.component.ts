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
        statusModule: 'andamento'
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
      timeupdateFrequency: 10000
    })

    player.load(this.training.modules[1].link) // https://youtube.com/embed/
    player.setVolume(10)


    player.on('timeupdate', () => {
      let progressBar:any = document.getElementById(`${this.training.modules[1].moduleId}`)
      let totalPorcent = 100;
      let totalVideo = Math.round(player.getDuration());
      let tempoAtual = Math.round(player.getCurrentTime())
      let porcent = Math.round((totalPorcent* tempoAtual) / totalVideo)
      console.log(porcent)
      progressBar.style.width = `${porcent}%`;
      
    })

    player.on('ended', () => {
      console.log("o video acabou")
    })
    
  }

}
