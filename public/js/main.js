let u = "", p = "";

window.addEventListener('load', async (e) => {

	document.getElementById("login").addEventListener("click", async (e) => {
		let user = document.getElementById("user").value;
		let pass = document.getElementById("pass").value;
		const loginInfo = btoa(`${user}:${pass}`);
		

		let reqHeaders = await fetch('/login', {
			method: "get",
			headers: {
				"Authorization": `Basic ${loginInfo}`,
				"Content-Type": `application/json`
			}
		});


		let data = await reqHeaders.json();

		if (data.isAuth) {
			u = user;
			p = pass;
		}
		console.log(data);
		

	});

	document.getElementById("create").addEventListener("click", async (e) => {
		let user = document.getElementById("new-user").value;
		let pass = document.getElementById("new-pass").value;
		
		const loginInfo = btoa(`${u}:${p}`);


		let reqHeaders = await fetch('/createuser', {
			body: JSON.stringify({newUser: user,newPass: pass}),

			method: "post",
			headers: {
				"Authorization": `Basic ${loginInfo}`,
				"Content-Type": `application/json`
			}
		});


		let data = await reqHeaders.json();


		if (data.isAuth) {
			u = user;
			p = pass;
		}

		
		console.log(data);

	});

});