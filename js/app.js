const loadUser = () => {
	fetch('https://randomuser.me/api/')
		.then((res) => res.json())
		.then((user) => showUserDetails(user));
};

const showUserDetails = (user) => {
	const userContainer = document.getElementById('user-container');

	const userObj = user.results[0];

	userContainer.innerHTML = `
					<div class="user">
					<img id="person" src=${userObj.picture.large} alt="" />
					<h2>${userObj.name.title + ' ' + userObj.name.first + ' ' + userObj.name.last}</h2>
					<p>${userObj.email}</p>
					<p>Gender: ${userObj.gender}</p>
					<p>Phone: ${userObj.phone}</p>
					<p>Cell: ${userObj.cell}</p>

					<h4>Location:</h4>
					<p> street no. ${
						userObj.location.street.number +
						', ' +
						userObj.location.street.name +
						', ' +
						userObj.location.city +
						', ' +
						userObj.location.state
					}</p>
				</div>
	`;
};
