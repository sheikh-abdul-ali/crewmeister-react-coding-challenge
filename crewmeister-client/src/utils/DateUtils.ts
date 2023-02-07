export const stringToDate = (value: string) => {
	const date = value.split("-").reverse().join("-");
	return date;
};
