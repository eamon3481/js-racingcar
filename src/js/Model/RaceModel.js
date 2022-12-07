import RacingCar from '../Service/RacingCar';
import Observer from './Observer';

export default class RaceModel extends Observer {
  #cars;
  #tryCount;
  #minTryCount;
  constructor() {
    super();
    this.#cars = [];
    this.#minTryCount = 1;
    this.#tryCount = null;
  }

  /**
   * 참가하는 차들의 이름을 추가합니다.
   * @param {string[]} cars
   */
  setCarNames(cars) {
    this.#cars = cars.map((car) => new RacingCar(car.trim()));
    this.notify();
  }

  /**
   * @param {number} tryCount
   */
  #validateTryCount(tryCount) {
    if (tryCount < this.#minTryCount) {
      throw new Error(
        `입력한 레이싱 횟수가 너무 적습니다. 레이싱 횟수는 ${
          this.#minTryCount
        }이상이어야 합니다.`
      );
    }
  }

  /**
   * @returns {{name, position}[]}
   */
  getCarNamesAndPositions() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }

  isCarNamesEmpty() {
    return this.#cars.length === 0;
  }

  isReady() {
    return this.#cars.length !== 0 && this.#tryCount !== null;
  }

  /**
   * 경기가 끝났는지 아닌지를 반환합니다.
   * @returns {boolean}
   */
  isFinished() {
    return this.#tryCount !== null && this.#tryCount <= 0;
  }

  async #moveCars() {
    while (this.#tryCount--) {
      await Promise.all(this.#cars.map((car) => car.move()));
      this.notify();
    }
  }

  reset() {
    this.#cars = [];
    this.#tryCount = null;
    this.notify();
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    return this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName())
      .join(', ');
  }

  /**
   * @param {number} tryCount
   */
  play(tryCount) {
    this.#validateTryCount(tryCount);
    this.#tryCount = tryCount;
    this.notify();
    this.#moveCars();
  }
}
