export default class View {
 constructor(target) {
  this.$target = target;
  this.setEvent();
  this.render();
 }

 setEvent() {}

 render() {
  if (this.$target.children.length !== 0) {
   this.$target.replaceChildren();
  }
  this.$target.insertAdjacentHTML('beforeend', this.getTemplate());
 }

 addEvent(eventType, selector, callback) {
  const children = [...this.$target.querySelectorAll(selector)];
  const isTarget = (target) =>
   children.includes(target) || target.closest(selector);
  this.$target.addEventListener(eventType, (ev) => {
   if (ev.target) {
    if (!isTarget(ev.target)) return false;

    callback(ev);
   }
  });
 }

 getTemplate() {
  return '';
 }
}
