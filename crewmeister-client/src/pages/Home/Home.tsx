import { useCallback, useEffect, useState } from "react";

import { Box } from "@mui/material";
import { fetchAbsence } from "api/features/AbsenceManager/absenceManager";

import DatePicker from "atoms/DatePicker/DatePicker";
import { Absence } from "models/absence.model";

import Table from "../../molecules/Table/Table";

function Home() {
	const [data, setData] = useState<Absence[]>([]);
	const [itemLength, setItemLength] = useState(0);
	const [loading, setLoading] = useState(false);
	const [filterDate, setFilterDate] = useState("");
	const [filterType, setFilterType] = useState("");

	const getAbsences = useCallback(async ({ page = 0, date = "", type = "" }) => {
		setLoading(true);
		const response = await fetchAbsence({ page, date, type });
		setData(response.items);
		setItemLength(response.totalItems);
		setLoading(false);
		return;
	}, []);

	useEffect(() => {
		getAbsences({ date: filterDate, type: filterType });
	}, [getAbsences, filterDate, filterType]);

	return (
		<Box>
			<Box width={"100%"} height={75} bgcolor={"red"} textAlign={"center"}>
				Header
			</Box>
			<Box px={10} py={5} display={"flex"} flexDirection="column">
				<Box display={"flex"} flex-direction="row" justifyContent={"space-between"} alignItems={"center"}>
					<Box display={"flex"} flex-direction="row" justifyContent="flex-start" gap={4}>
						<DatePicker label={"Date"} changeHandler={({ target }) => setFilterDate(target.value)} />
						<DatePicker label={"Date"} changeHandler={({ target }) => setFilterType("sickness")} />
					</Box>
					<Box>Total Absences : 42</Box>
				</Box>
				<Table data={data} getPageData={getAbsences} totalItems={itemLength} isFetching={loading} />
			</Box>
		</Box>
	);
}

export default Home;
