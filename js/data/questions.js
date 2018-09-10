const QUESTIONS = [
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: [
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    ],
    answers: [
      {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: false
      },
      {
        text: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        isCorrect: false
      },
      {
        text: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        isCorrect: true
      }
    ]
  },
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: [{
      artist: `Jingle Punks`,
      name: `Lucky Day`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      genre: `Pop`
    }],
    answers: [
      {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: true
      },
      {
        text: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        isCorrect: false
      },
      {
        text: `Quincas Moreira`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    text: `Выберите Pop треки`,
    tracks: [
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ],
    answers: [
      {
        isCorrect: false
      },
      {
        isCorrect: false
      },
      {
        isCorrect: true
      },
      {
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: [{
      artist: `Riot`,
      name: `Level Plane`,
      image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      genre: `R&B`
    }],
    answers: [
      {
        text: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        isCorrect: true
      },
      {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: false
      },
      {
        text: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    text: `Выберите инди-рок треки`,
    tracks: [
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      }
    ],
    answers: [
      {
        isCorrect: false
      },
      {
        isCorrect: false
      },
      {
        isCorrect: false
      },
      {
        isCorrect: true
      }
    ]
  }
];

export default QUESTIONS;
