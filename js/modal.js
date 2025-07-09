(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
    // атрибут data-menu-button на кнопку меню
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }

  refs.menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle('is-open');
  }
})();
