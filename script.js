// script.js — modal + page scaffolding

document.addEventListener('DOMContentLoaded', function () {
  // show current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Modal elements
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const loginClose = document.getElementById('loginClose');
  const loginCancel = document.getElementById('loginCancel');
  const loginForm = document.getElementById('loginForm');
  const modalBackdrop = document.querySelector('#loginModal .modal-backdrop');

  function openModal() {
    if (!loginModal) return;
    loginModal.classList.add('show');
    loginModal.setAttribute('aria-hidden', 'false');
    // move focus to first field for accessibility
    const first = loginModal.querySelector('input');
    if (first) first.focus();
    // prevent body scroll
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!loginModal) return;
    loginModal.classList.remove('show');
    loginModal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    // return focus to login button
    if (loginBtn) loginBtn.focus();
  }

  // open when navbar button clicked
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // close controls
  if (loginClose) loginClose.addEventListener('click', closeModal);
  if (loginCancel) loginCancel.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', (e) => {
    // close only when backdrop clicked (not panel)
    if (e.target && e.target.dataset && e.target.dataset.close) closeModal();
  });

  // close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal && loginModal.classList.contains('show')) {
      closeModal();
    }
  });

  // handle form submit (basic client-side validation)
  if (loginForm) {
    loginForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      const username = (document.getElementById('username') || {}).value || '';
      const password = (document.getElementById('password') || {}).value || '';

      if (!username.trim() || !password.trim()) {
        alert('Please enter both username and password.');
        return;
      }

      // Simulate login success (real auth not required for assignment)
      alert('Login successful — welcome, ' + username.trim() + '!');
      // Optionally: store to sessionStorage for later pages
      try { sessionStorage.setItem('user', username.trim()); } catch(e){}

      // close modal
      closeModal();
      // reset form
      loginForm.reset();
    });
  }
});