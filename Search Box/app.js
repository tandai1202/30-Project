var btnSearch = document.querySelector('.search-box__btn')
var isBtn = false;

btnSearch.onclick = function() {
  if(isBtn) {
    this.parentElement.style.width = '70px';
    isBtn = false;
  } else {
    this.parentElement.style.width = '420px';
    this.previousElementSibling.focus();
    isBtn = true;
  }
}