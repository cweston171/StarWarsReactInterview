import api from '../../api'

class CharacterService {
  static getCharacters() {
    return api.get('/people')
  }

  static getHomeworlds() {
    return api.get('/planets')
  }
}

export default CharacterService
