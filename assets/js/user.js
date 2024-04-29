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

// const name = document.getElementById('name')
// const password = document.getElementById('pass')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// console.log(password)

// form.addEventListener('submit', (e) => {
// 	let messages = []
// 	if (name.value === '' || name.value === null) {
// 		messages.push('Name is required')
// 	}

// 	if (messages.length > 0) {
// 		e.preventDefault()
// 		errorElement.innerHTML = messages.join(', ')
// 	}
// })

const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2500,
	delay: 300,
	// reset: true, // Animations repeat
})

sr.reveal(`.box, .inner-box, .forms-wrap`)
sr.reveal(`.box, .inner-box, .forms-wrap`, { delay: 200 })