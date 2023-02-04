import { absencesService } from "api/services/absences";

export const fetchAbsence = async ({ page }) => {
	const filters = JSON.stringify({ date: "21-12-2021" });
	const res = await absencesService.get({ page, filters }).catch(error => error);
	return res;
};
