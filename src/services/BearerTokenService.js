// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { endPoint } from "../../App";

// export async function loginAsAdmin() {
// 	// var myHeaders = new Headers();
// 	// myHeaders.append("Content-Type", "application/json");

// 	// var raw = JSON.stringify({
// 	// 	username: "admin@local",
// 	// 	password: "Admin123!",
// 	// 	GrantType: "password",
// 	// 	clientid: "05004bd2-18d9-402f-9a1b-673fcf1d46e7",
// 	// });

// 	// var requestOptions = {
// 	// 	method: "POST",
// 	// 	headers: myHeaders,
// 	// 	body: raw,
// 	// 	redirect: "follow",
// 	// };

// 	// await fetch("http://192.168.2.198:5000/oauth2/token", requestOptions)
// 	// 	.then(response => response.json())
// 	// 	.then(async result => {
// 	// 		console.log("stap 1");
// 	// 		console.log(result.accessToken);
// 	// 		console.log("stap 2");
// 	// 		// await AsyncStorage.setItem("accessToken", result.accessToken);
// 	// 		console.log("done");
// 	// 	})
// 	// 	.catch(error => console.log("error", error));
// }

// // export async function getAccessToken() {
// // 	const token = await AsyncStorage.getItem("accessToken");

// // 	console.log("token");
// // 	console.log(token);

// // 	if (token === null || token === undefined) {
// // 		throw new Error("No accessToken available!");
// // 	}

// // 	return token;
// // }
