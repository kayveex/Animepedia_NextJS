/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */
export const getAnimeResponse = async (resource, query) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
	const anime = await response.json();
	return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
	const response = await getAnimeResponse(resource);
	return response.data.flatMap(item => item[objectProperty]);
};

export const reproduceAnimeList = (data, gap) => { // Gap = 8
	const first = ~~(Math.random() * (data.length - gap) + 1); // 10
	const last = first + gap; // 10 + 8 = 18

	const response = {
		data: data.slice(first, last),
	};

	return response;
};
