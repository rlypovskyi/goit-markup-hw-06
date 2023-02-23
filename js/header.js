//   <!--  Скріпт для встановлення автоматичної висоти фіксованого елемента Heder та відступу padding для тексту  при зміні висоти контенту-->


    // console.log(document.querySelector(".page-header").getBoundingClientRect().height);

    // const { height: pageHeaderHeight } = document
    //   .querySelector(".page-header")
    //   .getBoundingClientRect();

    // document.body.style.paddingTop = '${pageHeaderHeight}px';



window.onscroll = () => changePageHeaderBackground();

function changePageHeaderBackground() {
  const pageHeader = document.querySelector('[data-header]');
  const pageHeaderOffsetTrigger = pageHeader.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > pageHeaderOffsetTrigger) {
    pageHeader.classList.add('no-transparency');
  } else {
    pageHeader.classList.remove('no-transparency');
  }
}