export const toggleMenu = () => {
  const $menuBtn = document.querySelector('.x-menu-burger');
  const $menu = document.querySelector('.x-side-menu');
  $menuBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    $menu.classList.toggle('is--hide');
  });
}
