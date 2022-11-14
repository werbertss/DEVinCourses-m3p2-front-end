import { Component, OnInit } from '@angular/core';

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
        titleModule:'Módulo 1',
        link: 'https://www.youtube.com/embed/vbs7jKRMuiA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Lorem ipsum dolor sit amet consectetur.',
        statusModule: 'andamento'
      },
      {
        titleModule:'Módulo 2',
        link: 'https://www.youtube.com/embed/vbs7jKRMuiA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Incidunt reiciendis vel asperiores.',
        statusModule: 'disponivel'
      },
      {
        titleModule:'Módulo 3',
        link: 'https://www.youtube.com/embed/vbs7jKRMuiA',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOUpolyASUyrLMSV2vqIvQQZ8_--ddMSsJF_xvxZ3tEwPPtZrc57tShVksL8y8JZ8QIk&usqp=CAU',
        descriptionModule: 'Ullam, quisquam? Culpa doloremque.',
        statusModule: 'disponivel'
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.training.modules[0].link)
  }

}
