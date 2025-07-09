(() => {
  const refs = {
    // керування модальним вікном
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    // керування мобільним меню
    menuBtn: document.querySelector('[data-menu-button]'),
    menuModal: document.querySelector('[data-menu-modal]'),
    menuContent: document.querySelector('[data-menu-content]'),
    menuCloseBtn: document.querySelector('[data-menu-close]'),
    menuCloneContainer: document.querySelector('[data-menu-clone-container]'),

    nav: document.querySelector('.nav-list'),
    contactInfo: document.querySelector('.contact-info'),
    socialList: document.querySelector('.social-links'),
  };

  refs.openModalBtn?.addEventListener('click', toggleModal);
  refs.closeModalBtn?.addEventListener('click', toggleModal);

  refs.menuBtn?.addEventListener('click', openMenuModal);
  refs.menuCloseBtn?.addEventListener('click', closeMenuModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function openMenuModal() {
    refs.menuModal.classList.add('is-open');

    // Очистить контейнер перед вставкой новых клонов
    refs.menuCloneContainer.innerHTML = '';

    // Клонируем и вставляем
    const navClone = refs.nav.cloneNode(true);
    const contactClone = refs.contactInfo.cloneNode(true);
    const socialClone = refs.socialList.cloneNode(true);

    refs.menuCloneContainer.appendChild(navClone);
    refs.menuCloneContainer.appendChild(contactClone);
    refs.menuCloneContainer.appendChild(socialClone);
  }

  function closeMenuModal() {
    refs.menuModal.classList.remove('is-open');
    refs.menuCloneContainer.innerHTML = ''; // Очистка при закрытии
  }
})();
