const registerButton = document.getElementById("btn");
const loginButton = document.getElementById("btn-login");
const fileInput = document.getElementById("memberData");
const fileListContainer = document.getElementById("fileList");

registerButton.addEventListener("click", async () => {
	registerButton.disabled = true;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const fname = document.getElementById("fname").value;
	const insurance = document.getElementById("insurance").value;
	const phone = document.getElementById("phone").value;
	const role = document.getElementById("role").value;
	const location = document.getElementById("location").value;

	Swal.fire({
		title: "Confirm",
		text: "Is the data provided accurate?",
		confirmButtonText: "Yes",
		preConfirm: async () => {
			try {
				const result = await fetch("http://localhost:5000/user/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
						name: fname,
						role: role,
						insurance: insurance,
						phone: phone,
						location: location,
					}),
				});

				const response = await result.json();
				if (result.status == 201) {
					Swal.fire({
						title: "Success",
						text: response.Message,
						confirmButtonText: "OK",
						preConfirm: () => {
							login();
						},
						icon: "success",
					});
					registerButton.disabled = false;
				} else {
					Swal.fire({
						title: "Error",
						text: response.Message,
						icon: "error",
					});
				}
				registerButton.disabled = false;
			} catch (error) {
				alert(error);
				registerButton.disabled = false;
			}
		},
		icon: "info",
	});
});

loginButton.addEventListener("click", async () => {
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("login-password").value;
	loginButton.disabled = true;

	try {
		const result = await fetch("http://localhost:5000/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const response = await result.json();
		localStorage.setItem("userData", JSON.stringify(response.user));
		console.log(response.user);
		if (result.status == 200) {
			const token = response.token;
			const parts = token.split(".");
			const payload = JSON.parse(atob(parts[1]));
			const user = payload.user.user;
			const role = payload.user.role;
			localStorage.setItem("auth-token", token);
			localStorage.setItem("user", user);
			localStorage.setItem("role", role);
			console.log(response.user.role == "admin");
			if (response.user.role == "admin") {
				window.location.href = "./admin_dashboard";
			} else {
				window.location.href = "./contact_person_dashboard";
			}
		} else {
			Swal.fire({
				title: "Error",
				text: response.Message,
				icon: "error",
			});
			loginButton.disabled = false;
		}
	} catch (error) {
		loginButton.disabled = false;
	}
});

fileInput.addEventListener("change", async (e) => {
	const files = e.target.files;
	const formData = new FormData();

	Array.from(files).forEach((file) => {
		formData.append("files", file);
	});

	try {
		const response = await fetch("http://localhost:5000/upload", {
			method: "POST",
			body: formData,
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			// Handle the response data as needed
		} else {
			throw new Error("Failed to upload files");
		}
	} catch (error) {
		console.error(error);
		// Handle errors, show error message, etc.
	}

	for (let i = 0; i < e.target.files.length; i++) {
		const file = e.target.files[i];
		const listItem = document.createElement("div");
		listItem.textContent = file.name;

		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.addEventListener("click", function () {
			fileListContainer.removeChild(listItem);
		});

		listItem.appendChild(removeButton);
		fileListContainer.appendChild(listItem);
	}
});

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
	x.style.left = "4px";
	y.style.right = "-520px";
	a.className += " white-btn";
	b.className = "btn";
	x.style.opacity = 1;
	y.style.opacity = 0;
}

function register() {
	x.style.left = "-510px";
	y.style.right = "5px";
	a.className = "btn";
	b.className += " white-btn";
	x.style.opacity = 0;
	y.style.opacity = 1;
}
