export default class Section {
  constructor({renderer}, containerSelector) {
    // this._items = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  render(arr) {
    arr.reverse().forEach(item => {
      this._renderer(item)
    })
  }

  addItem(element) {
    this._container.prepend(element)
  }
}