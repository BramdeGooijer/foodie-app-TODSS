import { ENDPOINT } from "../../app.json";
import { getTokenFromAsyncStorage } from "./BearerService";

export async function getAllRecipes(pageSize, pageNumber, categoryName) {
	console.log("[INFO] get all Recipes");

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());
	// console.log(bearerToken);

	return await fetch(
		`${ENDPOINT}/api/recipes?pageSize=${pageSize}&pageNumber=${pageNumber}&categoryName=${categoryName}`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	).catch(error => {
		console.log(error);
	});
}

export async function getFavoriteRecipes(pageSize, pageNumber) {
	console.log("[INFO] get all favorite recipes");

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());

	return await fetch(
		`${ENDPOINT}/api/recipes/favorite?PageNumber=${pageNumber}&PageSize=${pageSize}&UserId=4ee675ca-d24d-45a4-a427-0ecb4e01bbe0`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	).catch(error => {
		console.log(error);
	});
}

export async function getRecipe(id) {
	console.log(`[INFO] get recipe: ${id}`);

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());

	return await fetch(`${ENDPOINT}/api/recipes/${id}`, {
		method: "GET",
		headers: {
			Authorization: bearerToken,
		},
	}).catch(error => {
		console.log(error);
	});
}
