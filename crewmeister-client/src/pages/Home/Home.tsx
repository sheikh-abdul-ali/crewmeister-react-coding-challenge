import { useCallback, useEffect, useState } from "react";

import { Box } from "@mui/material";
import { fetchAbsence } from "api/features/AbsenceManager/absenceManager";

import { Absence } from "models/absence.model";

import Table from "../../molecules/Table/Table";

function Home() {
	const [data, setData] = useState<Absence[]>([]);
	const [itemLength, setItemLength] = useState(0);
	const [loading, setLoading] = useState(false);

	const getAbsences = useCallback(async (page = 0) => {
		setLoading(true);
		const response = await fetchAbsence({ page });
		setData(response.items);
		setItemLength(response.totalItems);
		setLoading(false);
		return;
	}, []);

	useEffect(() => {
		getAbsences();
	}, [getAbsences]);

	return (
		<Box>
			<Box width={"100%"} height={75} bgcolor={"red"} textAlign={"center"}>
				Header
			</Box>
			<Box px={10} py={5} display={"flex"}>
				<Box display={"flex"} flex-direction="column" justifyContent={"space-between"}>
					<DatePicker />
					<Dropdown />
				</Box>
				<Table data={data} getPageData={getAbsences} totalItems={itemLength} isFetching={loading} />
			</Box>
		</Box>
	);
}

export default Home;
