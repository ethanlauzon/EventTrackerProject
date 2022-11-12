window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
});

function init() {
	//setup event listeners
	//load initial data	
	loadTrainerList();
	addTrainerForm.addTrainerButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log('add trainer button clicked');
		let trainer = {
			name: addTrainerForm.name.value,
			bench: addTrainerForm.bench.value,
			deadlift: addTrainerForm.deadlift.value,
			squat: addTrainerForm.squat.value,
		};
		createTrainer(trainer);
	})
	}

function loadTrainerList() {
	//xhr to get the list
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/trainers');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let trainers = JSON.parse(xhr.responseText);
				displayTrainerList(trainers);
			}
			else {
				displayError("Error Retrieving Trainers: " + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayError(msg) {
	let errorDiv = document.getElementById('errorsDiv');
	errorDiv.textContent = '';
	let h4 = document.createElement('h4');
	h4.textContent = msg;
}

function displayTrainerList(trainers) {
	//add trainers to dom
	let tbody = document.getElementById('trainerTableBody');
	tbody.textContent = '';
	if (trainers && Array.isArray(trainers) && trainers.length > 0) {
		for (let trainer of trainers) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');
			td.textContent = trainer.id;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = trainer.name;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = trainer.bench;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = trainer.deadlift;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = trainer.squat;
			tr.appendChild(td);
			tbody.appendChild(tr);
			//Bind click event 
			tr.addEventListener('click', function(evt) {
				getTrainer(trainer.id);
			});
		}
	}
}

function getTrainer(trainerId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/trainers/' + trainerId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let trainer = JSON.parse(xhr.responseText);
				displayTrainer(trainer);
			}
			else {
				displayError("Error Retrieving Trainer: " + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayTrainer(trainer) {
	console.log(trainer);
	let listDiv = document.getElementById('trainerListDiv');
	listDiv.style.display = 'none';

	let trainerDiv = document.getElementById('trainerDetailsDiv');
	trainerDiv.style.display = 'block';
	trainerDiv.textContent = '';

	let h2 = document.createElement('h2');
	h2.textContent = 'Trainer Name: ' + trainer.name;
	trainerDiv.appendChild(h2);

	h2 = document.createElement('h2');
	h2.textContent = 'PR Bench: ' + trainer.bench + 'lbs';
	trainerDiv.appendChild(h2);

	h2 = document.createElement('h2');
	h2.textContent = 'PR Deadlift: ' + trainer.deadlift + 'lbs';
	trainerDiv.appendChild(h2);

	h2 = document.createElement('h2');
	h2.textContent = 'PR Squat: ' + trainer.squat + 'lbs';
	trainerDiv.appendChild(h2);
	
	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete Current Trainer';
	trainerDiv.appendChild(deleteButton);
	deleteButton.addEventListener('click', function(evt){
		evt.preventDefault();
		console.log('delete trainer button clicked');
		deleteTrainer(trainer.id);
		listDiv.style.display = 'block';
		trainerDiv.style.display = 'none';
		deleteButton.remove();		
	})

	let backButton = document.createElement('button');
	backButton.textContent = 'Back To List';
	trainerDiv.appendChild(backButton);
	backButton.addEventListener('click', function() {
		listDiv.style.display = 'block';
		trainerDiv.style.display = 'none';
		deleteButton.remove();
	})
	
	let updateButton = document.createElement('button');
	updateButton.textContent = 'Update Current Trainer';
	trainerDiv.appendChild(updateButton);
	updateButton.addEventListener('click', function(){
		console.log('update trainer button clicked');
		updateTrainer(trainer.id);
		listDiv.style.display = 'block';
		trainerDiv.style.display = 'none';
		deleteButton.remove();
	})
}

function createTrainer(trainer) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/trainers');

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let createdTrainer = JSON.parse(xhr.responseText);
				displayTrainer(createdTrainer);
			}
			else {
				displayError('Error creating Trainer: ' + xhr.status + ', ' + xhr.statusText);
			}
		}
	};
	let trainerJson = JSON.stringify(trainer);
	xhr.send(trainerJson);
}

function deleteTrainer(trainerId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/trainers/' + trainerId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				loadTrainerList();
			}
			else {
				displayError('Error deleting Trainer: ' + xhr.status + ', ' + xhr.statusText);
			}
		}
	};
	xhr.send();
}

function updateTrainer(trainerId){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/trainers/' + trainerId);
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			loadTrainerList();
		}
		else {
			displayError('Error updating Trainer: ' + xhr.status + ', ' + xhr.statusText);
		}
	}
	xhr.send();
}




