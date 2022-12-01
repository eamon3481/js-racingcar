import { SELECTOR } from '../../src/js/constants';

describe('자동차 경주 게임울 시작한다.', () => {
 const carNames = ['EAST', 'WEST', 'SOUTH', 'NORTH'];
 const SEC = 1000;
 const COUNT = 5;
 beforeEach(() => {
  cy.visit('http://localhost:3000/');
  cy.carNameTypo(carNames.join(','));
  cy.tryCountTypo(COUNT);
 });

 it('자동차 이름과 시도 횟수를 입력하고 확인을 누르면 자동차 경주 게임이 진행된다.', () => {
  cy.get(SELECTOR.ID.RACE_PROCESS).within(() => {
   carNames.forEach((carName) => {
    cy.contains(carName).should('be.visible');
   });
  });
 });
 it('자동차 경주 게임이 진행되는 동안, 로딩바가 보이고 게임이 끝나면 로딩바가 사라진다.', async () => {
  await cy.wait(0);
  await cy.get('.spinner').should('exist');
  await cy.wait(COUNT * SEC);
  await cy.get('.spinner').should('not.exist');
 });
 it('주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.', () => {});
});
