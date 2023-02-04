import { GLOBAL_CONSTANTS } from "../constants";

const BASE_URL = GLOBAL_CONSTANTS.BACKEND_API;

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const parseStatus = <T>(res: Response, data: Promise<T>): Promise<T> => {
	return new Promise((resolve, reject) => {
		if (res.ok) {
			data.then(response => resolve(response));
		} else {
			data.then(response => reject({ code: res.status, response }));
		}
	});
};

export const request = async function <T>(
	url: string,
	method: RequestMethod = "GET",
	body?: Record<string, unknown>,
	options?: RequestInit,
	emptyResponse = false
): Promise<T | null> {
	const reqOptions: RequestInit = {
		method
	};

	// If provided url is valid full url, like https://google.com we use it,
	// instead of appending it to BASE_URL
	let useBaseUrl = true;
	try {
		const validUrl = new URL(url);
		if (validUrl) useBaseUrl = false;
	} catch {}
	const finalUrl = `${useBaseUrl ? BASE_URL : ""}${url}`;
	try {
		const res = await fetch(`${finalUrl}`, reqOptions);
		return await parseStatus(res, emptyResponse ? new Promise(resolve => resolve(null)) : res.json());
	} catch (e) {
		throw e;
	}
};
