/**
 * GET PEOPLE (CHARACTERS)
 */
export const GET_CHARACTERS = '[People] Get Characters'
export const GET_CHARACTERS_SUCCESS = '[People] Get Characters - Success'
export const GET_CHARACTERS_FAILURE = '[People] Get Characters - Failure'

export function getCharacters(data) {
  return {
    type: GET_CHARACTERS,
    data
  }
}
export function getCharactersSuccess(data) {
  return {
    type: GET_CHARACTERS_SUCCESS,
    data
  }
}
export function getCharactersFailure() {
  return {
    type: GET_CHARACTERS_FAILURE
  }
}

/**
 * SELECT CHARACTER
 */
export const SELECT_CHARACTER = '[People] Select Character'
export function selectCharacter(data) {
  return {
    type: SELECT_CHARACTER,
    data
  }
}

/**
 * GET HOMEWORLDS
 */
export const GET_HOMEWORLDS = '[People] Get Character Homeworlds'
export const GET_HOMEWORLDS_SUCCESS =
  '[People] Get Character Homeworlds - Success'
export const GET_HOMEWORLDS_FAILURE =
  '[People] Get Character Homeworlds - Failure'

export function getHomeworlds(data) {
  return {
    type: GET_HOMEWORLDS,
    data
  }
}
export function getHomeworldsSuccess(data) {
  return {
    type: GET_HOMEWORLDS_SUCCESS,
    data
  }
}
export function getHomeworldsFailure() {
  return {
    type: GET_HOMEWORLDS_FAILURE
  }
}
