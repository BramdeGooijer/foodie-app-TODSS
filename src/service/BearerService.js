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

async function saveTokenToAsyncStorage(token) {
	console.log("[INFO] saveToken to storage");
	// console.log(token);
	AsyncStorage.setItem("accessToken", token);
	console.log("[INFO] token saved to storage");
}

export async function getTokenFromAsyncStorage() {
	console.log("[INFO] getToken from storage");
	return await AsyncStorage.getItem("accessToken").then(response => {
		return response;
	});
}
