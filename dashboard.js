document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const expandButton = document.getElementById('expand');
  const navexpanded = document.getElementById('sidebar');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  expandButton.addEventListener('click', () => {

    if (window.innerWidth < 600) {
        navexpanded.classList.toggle('expanded');
    }
  });
});