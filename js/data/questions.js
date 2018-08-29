
const QUESTIONS = [
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: {
      'track-0': {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      }
    },
    answers: {
      'answer-0': {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: false
      },
      'answer-1': {
        text: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        isCorrect: false
      },
      'answer-2': {
        text: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        isCorrect: true
      }
    }
  },
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: {
      'track-0': {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      }
    },
    answers: {
      'answer-0': {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: true
      },
      'answer-1': {
        text: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        isCorrect: false
      },
      'answer-2': {
        text: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        isCorrect: false
      }
    }
  },
  {
    type: `artist`,
    text: `Кто исполняет эту песню?`,
    tracks: {
      'track-0': {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    },
    answers: {
      'answer-0': {
        text: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        isCorrect: false
      },
      'answer-1': {
        text: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        isCorrect: true
      },
      'answer-2': {
        text: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        isCorrect: false
      }
    }
  },
  {
    type: `genre`,
    text: `Выберите инди-рок треки`,
    tracks: {
      'track-0': {
        artist: `Riot`,
        name: `Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      'track-1': {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      'track-2': {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      'track-3': {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      }
    },
    answers: {
      'answer-0': {
        isCorrect: false
      },
      'answer-1': {
        isCorrect: true
      },
      'answer-2': {
        isCorrect: false
      },
      'answer-3': {
        isCorrect: true
      }
    }
  }
];

export default QUESTIONS;
