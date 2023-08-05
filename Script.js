function myFunction(clickedElement) {
        
    const menu_btn = document.querySelector('.hamburger-menu');
    const mobile_menu = document.querySelector('#menubar');

        menu_btn.classList.toggle('change');
        mobile_menu.classList.toggle('is-active');
}

const openButtons = document.querySelectorAll('.open-button');
const closeButtons = document.querySelectorAll('.close-button');

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.getAttribute('id');
    const modal = document.getElementById(modalId);
    modal.close();
  });
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const button = faq.querySelector('.toggle-button');
  const body = faq.querySelector('.faq-body');

  button.addEventListener('click', () => {
    body.classList.toggle('show');

    if (body.classList.contains('show')) {
      button.textContent = '-';
    } else {
      button.textContent = '+';
    }
  });
});