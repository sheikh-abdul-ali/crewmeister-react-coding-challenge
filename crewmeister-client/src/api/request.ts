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
	emptyResponse = false
): Promise<T | null> {
	const reqOptions: RequestInit = {
		method
	};

	const finalUrl = `${BASE_URL}${url}`;
	try {
		const res = await fetch(`${finalUrl}`, reqOptions);
		return await parseStatus(res, emptyResponse ? new Promise(resolve => resolve(null)) : res.json());
	} catch (e) {
		throw e;
	}
};
