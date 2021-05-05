const modalProfileEdit = document.querySelector('.popup_profile-edit') // попап редактирования профиля
const modalProfileEditButtonOpen = document.querySelector('.profile__edit-button')// кнопка открытия попапа редактирования профиля
const modalProfileEditButtonClose = document.querySelector('.popup__close-button') // кнопка закрытия попапа редактирования профиля
const profileNameInput = document.querySelector('.popup__input_data_name') // инпут имени попапа редактирования профиля
const profileAboutInput = document.querySelector('.popup__input_data_about') // инпут описания попапа редактирования профиля
const modalWindowForm = document.querySelector('.popup__form') // форма попапа
const profileName = document.querySelector('.profile__name') // имя профиля
const profileAbout = document.querySelector('.profile__about') // описание профиля
const profileAvatar = document.querySelector('.profile__avatar')
const modalAddForm = document.querySelector('.popup_card-add') // попап добавления карточек
const modalAddFormButtonOpen = document.querySelector('.profile__add-button') // кнопка попапа добавления карточек
const modalAddFormButtonClose = document.querySelector('.popup__close-button_card-add') // кнопка попапа добавления карточек
const modalFigurePopup = document.querySelector('.popup_zoom-image') // Попап с изображением
const modalFigurePopupCloseButton = document.querySelector('.popup__close-button_zoom-image') // Кнопка закрытия попапа с изображением
const submitButtonAddForm = modalAddForm.querySelector('.popup__button') //Кнопка сабмита в попапе добавления карточки
const elementsContainer = document.querySelector('.elements')
const cardAddForm = modalAddForm.querySelector('.popup__form')
const popupCaption = document.querySelector('.popup__caption')
const popupImage = document.querySelector('.popup__image')
const placeName = document.querySelector('.popup__input_place_name')
const placeUrl = document.querySelector('.popup__input_place_url')
const modalAvatarEdit = document.querySelector('.popup_avatar-edit') // попап редактирования аватара профиля
const avatarEditForm = modalAvatarEdit.querySelector('.popup__form')
const avatarEditButton = document.querySelector('.profile__avatar-edit-button')

const cardSelector = '#card-template' // селектор темплейт элемента
const popupFigureSelector = '.popup_zoom-image' // селектор попапа с изображением
const elementsContainerSelector = '.elements' // селектор контейнера карточек
const profileNameSelector = '.profile__name' // селектор имени профиля
const profileAboutSelector = '.profile__about' // селектор описания профиля
const popupCardAddSelector = '.popup_card-add' // селектор попапа с формой добавления
const popupProfileEditSelector = '.popup_profile-edit' // селектор попапа с формой редактирования профиля
const popupDeleteConfirmSelector = '.popup_confirm-delete' // селектор попапа с подтверждением удаления карточки
const popupAvatarEditSelector = '.popup_avatar-edit' // селектор попапа редактирования аватара профиля
const profileAvatarSelector = '.profile__avatar'


const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const initialCards = [
  {
    name: 'Тбилиси',
    link: 'https://summerhotels.ru/wp-content/uploads/2017/08/Most-Mira-1.jpg'
  },
  {
    name: 'Батуми',
    link: 'https://www.kavkaz-uzel.eu/system/uploads/article_image/image/0013/139551/Panoramic_view_of_Batumi_at_night.jpg'
  },
  {
    name: 'Афины',
    link: 'https://www.grekomania.ru/images/places/attica/athens/4757_Erectheion-Acropolis-Athens.jpg'
  },
  {
    name: 'Рим, колизей',
    link: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Colosseum-Rome.jpg'
  },
  {
    name: 'Нидерланды',
    link: 'https://yablyk.com/wp-content/uploads/2019/02/niderlandy.jpg'
  },
  {
    name: 'Гора Олимп',
    link: 'https://weatlas.com/img/landmarks/f2be31c534ad180012614017c02341b5.jpg'
  }
]

export 
{ 
  profileAvatar,
  modalProfileEdit,
  modalProfileEditButtonOpen,
  modalProfileEditButtonClose,
  profileNameInput,
  profileAboutInput,
  modalWindowForm,
  profileName,
  profileAbout,
  modalAddForm,
  modalAddFormButtonOpen,
  modalAddFormButtonClose,
  modalFigurePopup,
  modalFigurePopupCloseButton,
  submitButtonAddForm,
  elementsContainer,
  cardAddForm,
  popupCaption,
  popupImage,
  placeName,
  placeUrl,
  selectors,
  initialCards,
  cardSelector,
  popupFigureSelector,
  elementsContainerSelector,
  profileNameSelector,
  profileAboutSelector,
  popupCardAddSelector,
  popupProfileEditSelector,
  popupDeleteConfirmSelector,
  modalAvatarEdit,
  popupAvatarEditSelector,
  avatarEditForm,
  profileAvatarSelector,
  avatarEditButton
 }