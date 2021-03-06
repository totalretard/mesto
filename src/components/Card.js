export default class Card {
  constructor( {data, handleCardClick, handleLikeClick, handleConfirmDelete}, cardSelector, api, userId) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes

    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleConfirmDelete = handleConfirmDelete

    this._cardSelector = cardSelector
    
    this._api = api
    this._id = data._id // id карточки
    this._ownerId = data.owner._id // id создателя карточки
    this._userId = userId // id текущего пользователя
  }

  //Методы

    //Получение карточки
  _getCardTemplate() {
    this._view = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true)
  }

    //Публичный метод отрисовки карточки
  renderCard() {
    this._getCardTemplate()
    this._setEventListeners()
    this._cardImage = this._view.querySelector('.elements__image')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._view.querySelector('.elements__title').textContent = this._name

    this._view.querySelector('.elements__like-count').textContent = this._likes.length

    if(!(this._ownerId === this._userId)) {
      this._view.querySelector('.elements__remove-button').style.display = 'none'
    }
    
    if(this._likes.find((obj) => this._userId === obj._id)) {
      this._view.querySelector('.elements__like-button').classList.add('elements__like-button_active')
    }

    return this._view
  }

    //Слушатели событий
  _setEventListeners() {
    //Лайк
    this._view
    .querySelector('.elements__like-button')
    .addEventListener('click', () => {
      this._handleLikeClick()
    })

    //Удаление
    this._view
    .querySelector('.elements__remove-button')
    .addEventListener('click', () => {
      this._handleConfirmDelete()
    })

    //Открытие попапа с изображением
    this._view
    .querySelector('.elements__image')
    .addEventListener('click', () => {
      this._handleCardClick({ 
        name: this._name,
        src: this._link })
    })
  }

  //Лайк
  handleLikeCard() {
    const likeButton = this._view.querySelector('.elements__like-button')
    const likeCount = this._view.querySelector('.elements__like-count')

    if(!(likeButton.classList.contains('elements__like-button_active'))) {
      this._api.like(this._id)
        .then((data) => {
          likeButton.classList.add('elements__like-button_active')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.dislike(this._id)
        .then((data) => {
          likeButton.classList.remove('elements__like-button_active')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  //Удаление
  handleRemoveCard() {
    this._view
    .closest('.elements__card')
    .remove()
  }
}