export const CHOOSE_CHARACTER = "CHOOSE_CHARACTER";

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const chooseCharacter = (character, history) => {
  history.push("/game");
  return genericAction(CHOOSE_CHARACTER, character);
};
