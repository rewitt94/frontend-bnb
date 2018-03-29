var filtersDisplayed = false

function showFilters() {
  accomodationPage = document.getElementById('accomodation_page');
  if (!filtersDisplayed) {
    document.getElementById('scroll_header').innerHTML = '-'
    accomodationPage.style.top = '-140px'
    scrollDown(accomodationPage)
    filtersDisplayed = !filtersDisplayed
  } else {
    document.getElementById('scroll_header').innerHTML = '+'
    accomodationPage.style.top = '60px'
    scrollUp(accomodationPage)
    filtersDisplayed = !filtersDisplayed
  }
}

function scrollDown(accomodationPage) {
  if (parseInt(accomodationPage.style.top) < 60) {
    accomodationPage.style.top = (parseInt(accomodationPage.style.top) + 5) + 'px'
    setTimeout(() => scrollDown(accomodationPage),3)
  }
}

function scrollUp(accomodationPage) {
  if (parseInt(accomodationPage.style.top) > -140) {
    accomodationPage.style.top = (parseInt(accomodationPage.style.top) - 5) + 'px'
    setTimeout(() => scrollUp(accomodationPage),3)
  }
}
