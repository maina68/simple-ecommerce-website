const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});