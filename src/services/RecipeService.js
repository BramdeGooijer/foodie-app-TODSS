// import { getAccessToken } from "./BearerTokenService";

// // export function getAllRecipes(pageNumber, pageSize, categoryName) {
// // 	// console.log("hieroooo")
// // 	var myHeaders = new Headers();
// // 	// console.log(getAccessToken());
// // 	myHeaders.append("Authorization", "Bearer " + getAccessToken());

// // 	let myParameter = "?";

// // 	if (pageNumber !== null || pageNumber !== undefined) {
// // 		myParameter += `pageNumber=${pageNumber}&`;
// // 	}
// // 	if (pageSize !== null || pageSize !== undefined) {
// // 		myParameter += `pageNumber=${pageSize}&`;
// // 	}
// // 	if (categoryName !== null || categoryName !== undefined) {
// // 		myParameter += `pageNumber=${categoryName}&`;
// // 	}

// // 	var requestOptions = {
// // 		method: "GET",
// // 		headers: myHeaders,
// // 		redirect: "follow",
// // 	};

// // 	fetch("http://192.168.2.198:5000/api/recipes", requestOptions)
// // 		.then(response => response.text())
// // 		.then(result => {
// // 			// console.log(result);
// // 			return result;
// // 		})
// // 		.catch(error => console.log("error", error));
// // }
