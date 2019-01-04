import api from '../../api'

class CharacterService {
  static getCharacters(request) {
    return api.get('/people')
  }
}

export default CharacterService
