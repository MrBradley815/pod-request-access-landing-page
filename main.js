const $form = document.querySelector('.input-group')
const $email = document.querySelector('.email')
const $error = document.querySelector('.error')

function validateEmail() {
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if ($email.value.match(emailFormat)) {
    console.log('Form Submitted!')
  } else {
    $error.classList.add('show')
    setTimeout(() => {
      $error.classList.remove('show')
    }, 4000)
  }
}

$form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateEmail()
})