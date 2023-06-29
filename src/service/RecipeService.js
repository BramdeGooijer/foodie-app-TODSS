import { Alert } from "react-native";
import { ENDPOINT } from "../../app.json";
import { getTokenFromAsyncStorage } from "./UserService";

export async function getAllRecipes(pageSize, pageNumber, categoryName) {
	console.log("[INFO] get all Recipes");

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());

	return await fetch(
		`${ENDPOINT}/api/recipes?pageSize=${pageSize}&pageNumber=${pageNumber}&categoryName=${categoryName}`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	).catch(error => {
		Alert.alert(
			"Er is iets mis gegaan!",
			"Het vinden van alle recepten is niet gelukt"
		);
		console.log(error);
	});
}

export async function getFavoriteRecipes(pageSize, pageNumber) {
	console.log("[INFO] get all favorite recipes");

	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());

	return await fetch(
		`${ENDPOINT}/api/recipes/favorite?PageNumber=${pageNumber}&PageSize=${pageSize}`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	).catch(error => {
		Alert.alert(
			"Er is iets mis gegaan!",
			"Het vinden van jouw favorieten recepten is niet gelukt"
		);
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
		Alert.alert(
			"Er is iets mis gegaan!",
			"Het vinden van het recept is niet gelukt"
		);
		console.log(error);
	});
}

export async function searchRecipe(name, pageNumber, categoryName) {
	let bearerToken = "Bearer " + (await getTokenFromAsyncStorage());

	console.log(`[INFO] search recipe: ${name}`);

	console.log(
		`${ENDPOINT}/api/recipes?pageSize=100&Categoryname=${categoryName}&RecipeName=${name}&pageNumber=${pageNumber}`
	);

	return await fetch(
		`${ENDPOINT}/api/recipes?pageSize=100&Categoryname=${categoryName}&RecipeName=${name}&pageNumber=${pageNumber}`,
		{
			method: "GET",
			headers: {
				Authorization: bearerToken,
			},
		}
	).catch(error => {
		Alert.alert(
			"Er is iets mis gegaan!",
			"Het vinden van het recept is niet gelukt"
		);
		console.log(error);
	});
}
