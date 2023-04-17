import { ENDPOINT } from "../../app.json";
import { getTokenFromAsyncStorage } from "./BearerService";

export async function getAllRecipes(pageSize, pageNumber, categoryName) {
	console.log("get all Recipes");

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());
	console.log(bearerToken);

	let pathParameters = "?";

	await fetch(
		`${ENDPOINT}/api/recipes?pageSize=${pageSize}&pageNumber=${pageNumber}&categoryName=${categoryName}`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	)
		.then(respose => respose.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});
}
