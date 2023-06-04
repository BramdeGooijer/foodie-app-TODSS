import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINT } from "../../app.json";

export async function loginAsAdmin() {
	console.log("[INFO] get Bearer Token from api");

	await fetch(`${ENDPOINT}/oauth2/token`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "admin@local",
			password: "Admin123!",
			GrantType: "password",
			clientid: "05004bd2-18d9-402f-9a1b-673fcf1d46e7",
		}),
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.accessToken);
			saveTokenToAsyncStorage(data.accessToken);
		});
}

export async function loginWithEmailAndPassword(email, password) {
	console.log("[INFO] login with email and password");

	return await fetch(`${ENDPOINT}/oauth2/token`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: email,
			password: password,
			GrantType: "password",
			clientid: "05004bd2-18d9-402f-9a1b-673fcf1d46e7",
		}),
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.accessToken);
			saveTokenToAsyncStorage(data.accessToken);
			return true;
		})
		.catch(error => {
			console.log(error);
		});
}

export async function createUserWithEmailAndPassword(
	username,
	email,
	password
) {
	console.log("[INFO] create user with email and password");

	await fetch(`${ENDPOINT}/api/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: email,
			name: username,
			password: password,
		}),
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});
}

async function saveTokenToAsyncStorage(token) {
	console.log("[INFO] saveToken to storage");
	// console.log(token);
	AsyncStorage.setItem("accessToken", token)
	console.log("[INFO] token saved to storage");
}

export async function getTokenFromAsyncStorage() {
	console.log("[INFO] getToken from storage");
	return await AsyncStorage.getItem("accessToken").then(response => {
		return response;
	});
}
