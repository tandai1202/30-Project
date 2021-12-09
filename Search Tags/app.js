var ul = document.querySelector('.root')
var input = document.querySelector('.content__input')
var removeAllBtn = document.querySelector('.remove-all-btn')

var tags = ['react', 'nodejs']

function render() {
  var html = tags.map(function(tag, index) {
    return `
    <li>
      ${tag}
      <i class='bx bx-x delete' data-index=${index}></i>
    </li>
    `
  }).join('')
  ul.innerHTML = html
}

function add() {
  const tag = input.value.trim();
  if(tag != '' && !tags.includes(tag)) {
    tags.push(tag)
  }
  input.value = ''
  input.focus()
}

ul.onclick = function(e) {
  const deleteBtn = e.target.closest('.delete')
  if(deleteBtn) {
    const index = deleteBtn.dataset.index
    tags.splice(index, 1)
    render()
  }
}


input.onkeydown = function(e) {
  if(e.key === 'Enter') {
    add()
  }
  render()
}

removeAllBtn.onclick = function() {
  tags = []
  render()
}

render()