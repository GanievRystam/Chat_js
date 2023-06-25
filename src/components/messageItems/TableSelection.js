export class TableSelection {
  constructor() {
    this.group = [];
  }
  select($el, className, shiftDown = false) {
    if (!shiftDown) {
      this.clear(className);
    }
    this.group.push($el);
    if ($el.containsClass(className)) {
      $el.removeClass(className);
    } else {
      $el.addClass(className);
    }
  }
  clear(className) {
    this.group.forEach((item) => item.removeClass(className));
    this.group = [];
  }
  selectGroup(group = []) {
  }
}