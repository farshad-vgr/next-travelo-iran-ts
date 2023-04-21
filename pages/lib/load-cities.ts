// If you are using API routes to fetch data, the logic for fetching the data from the CMS can be shared by using a lib/ directory
export async function loadCities() {
	const response = await fetch("http://localhost:3000/api/cities");
	const data = await response.json();

	return data;
}
