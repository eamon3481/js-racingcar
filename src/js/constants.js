export const NAME = {
  CAR_NAME: 'car-name',
  RACING_COUNT: 'racing-count',
};
export const ALERT_MASSAGE = {
  FINISH: '🎇🎇🎇🎇축하합니다!🎇🎇🎇🎇',
  INVALID_CAR_NAME_LENGTH: (min, max) =>
    `유효하지 않은 이름 길이입니다. 자동차의 이름은 ${
      min ? min.toString() + '자 이상만,' : ''
    } ${max ? max.toString() + '자 이하만' : ''} 가능합니다.`,

  INVALID_RACING_COUNT: (min) =>
    `입력한 레이싱 횟수가 너무 적습니다. 레이싱 횟수는 ${min}이상이어야 합니다.`,
};
export const GAME_STATE = {
  INITIAL: 'initial',
  READY: 'ready',
  PLAYING: 'playing',
  FINISHED: 'finished',
};

export const SELECTOR = {
  FIELDSET: {
    CAR_NAME: `fieldset[name="${NAME.CAR_NAME}-fieldset"]`,
    RACING_COUNT: `fieldset[name="${NAME.RACING_COUNT}-fieldset"]`,
  },
  INPUT: {
    CAR_NAME: `input[name="${NAME.CAR_NAME}-input"]`,
    RACING_COUNT: `input[name="${NAME.RACING_COUNT}-input"]`,
  },
  ID: {
    RACE_FORM: '#race-form',
    RACE_PROCESS: '#race-process',
    RACE_RESULT: '#race-result',
  },
};
