import { ITraningByUser } from "../models/trainingByUser";


export const TRAININGBYUSER_MOCK: ITraningByUser[] = [
  {
      userId: 1,
      id: 2,
      url: 'https://setcesp.org.br/wp-content/uploads/2019/08/treinamento.jpg',
      title: 'Ingles Basico',
      description:
          'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Inlges o basico.',
      teacher: 'Rodrigo Rosa',
      duration: 70,
      status: 'andamento',
      category: 'idioma',
      date:new Date(),
    },

{
        userId: 2,
        id: 1,
        url: 'https://certificadocursosonline.com/wp-content/uploads/2018/07/Curso-de-Manutenc%CC%A7a%CC%83o-de-Computadores.jpg',
        title: 'Curso de Manutenção de Computadores',
        description:
          'Architecto eaque consectetur nostrum impedit earum at harum. Reiciendis suscipit soluta, ab, repellat ad',
        teacher: 'Carlos Silva',
        duration: 20,
        status: 'matriculado',
        category: 'tecnologia',
        date:new Date(),
},

  {
        userId: 3,
        id: 16,
        url: 'https://certificadocursosonline.com/wp-content/uploads/2019/09/CAPA-DO-CURSO-DE-COACHING.jpg',
        title: ' Coaching',
        description:
          'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Coaching.',
        teacher: 'Jair souza',
        duration: 16,
        status: 'andamento',
        category: 'psicologia',
        date:new Date(),
        },
{
        userId: 5,
        id: 18,
        url: 'https://www.redeicm.org.br/purissimo/wp-content/uploads/sites/16/2019/10/Como-escrever-uma-reda%C3%A7%C3%A3o-nota-mil-1024x1009.jpg',
        title: ' Redacao',
        description:
          'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis .',
        teacher: 'Maria Eduarda',
        duration: 18,
        status: 'finalizado',
        category: 'educacao',
        date:new Date(),
},

];
