const inputs = document.querySelectorAll('.input-field');
const toggleBtn = document.querySelectorAll('.toggle');
const main = document.querySelector('main')

inputs.forEach(inp => {
	inp.addEventListener('focus', () => {
		inp.classList.add('active')
	});
	inp.addEventListener('blur', () => {
		if(inp.value != '') return;
		inp.classList.remove('active')
	})
})

toggleBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		main.classList.toggle('sign-up-mode')
	})
})


const form = document.getElementById('form')
const form2 = document.getElementById('form2')
const name = document.getElementById('name')
const name2 = document.getElementById('name2')
const pass = document.getElementById('pass')
const pass2 = document.getElementById('pass2')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	checkInputs()
})

function checkInputs() {
	const nameValue = name.value.trim()
	const passValue = pass.value.trim()
	const subBtn = document.querySelector('.sign-btn')

	if(nameValue === '') {
		setErrorFor(name, 'Username cannot be blank')
	} else {
		setSuccessFor(name)
	}

	if(passValue === '') {
		setErrorFor(pass, 'Password cannot be blank')
	} else {
		setSuccessFor(pass)
	}

	if(nameValue === '' || passValue === '') {
		subBtn.className = 'sign-btn error-btn'
	} else {
		subBtn.className = 'sign-btn'
	}
}

function setErrorFor(input, message) {
	const inputWrap = input.parentElement;
	const span = inputWrap.querySelector('span')

	span.innerText = message

	inputWrap.className = 'input-wrap error'
}

function setSuccessFor(input) {
	const inputWrap = input.parentElement;
	inputWrap.className = 'input-wrap success'
}


form2.addEventListener('submit', (e) => {
	e.preventDefault()

	checkInputs2()
})

function checkInputs2() {
	const nameValue2 = name2.value.trim()
	const passValue2 = pass2.value.trim()
	const emailValue = email.value.trim()
	const subBtn = document.querySelector('.sign-btn')

	if(nameValue2 === '') {
		setErrorFor2(name2, 'Username cannot be blank')
	} else {
		setSuccessFor2(name2)
	}

	if(passValue2 === '') {
		setErrorFor2(pass2, 'Password cannot be blank')
	} else {
		setSuccessFor2(pass2)
	}

	if(emailValue === '') {
		setErrorFor2(email, 'Email cannot be blank')
	} else if(!isEmail(emailValue)) {
		setErrorFor2(email, 'Email is not valid')
	} else {
		setSuccessFor(email)
	}

	if(nameValue2 === '' || passValue2 === '') {
		subBtn.className = 'sign-btn error-btn'
	} else {
		subBtn.className = 'sign-btn'
	}
}

function setErrorFor2(input, message) {
	const inputWrap2 = input.parentElement;
	const span2 = inputWrap2.querySelector('span')

	span2.innerText = message

	inputWrap2.className = 'input-wrap error'
}

function setSuccessFor2(input) {
	const inputWrap2 = input.parentElement;
	inputWrap2.className = 'input-wrap success'
}



// function setErrorFor(input, message) {
// 	const inputWrap = input.parentElement;
// 	const span = inputWrap.querySelector('span')

// 	span.innerText = message;

// 	inputWrap.className = 'input-wrap error';
// }

// function setSuccessFor(input) {
// 	const inputWrap = input.parentElement;
// 	inputWrap.className = 'input-wrap success'
// }

function isEmail(email) {
	return /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/.test(email);
}


const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2500,
	delay: 300,
	// reset: true, // Animations repeat
})

sr.reveal(`.box, .inner-box, .forms-wrap`)
sr.reveal(`.box, .inner-box, .forms-wrap`, { delay: 200 })