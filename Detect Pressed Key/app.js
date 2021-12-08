const aletBtn = document.querySelector('.alet')
const box = document.querySelector('.box')
const eKey = document.querySelector('.key p:last-child')
const eLocation = document.querySelector('.location p:last-child')
const eWhich = document.querySelector('.which p:last-child')
const eCode = document.querySelector('.code p:last-child')
const result = document.querySelector('.result');

document.addEventListener('keydown', function(e) {

  let keyName = e.keyCode === 32 ? 'Space' : e.key

  eKey.innerText = keyName
  eLocation.innerText = e.location
  eWhich.innerText = e.which
  result.innerText = e.which
  eCode.innerText = e.code

  aletBtn.classList.add('hide')
  box.classList.remove('hide')
})