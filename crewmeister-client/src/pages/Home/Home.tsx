import { useCallback, useEffect, useState } from "react";

import { Box, SelectChangeEvent, Typography } from "@mui/material";

import { fetchAbsence } from "api/features/AbsenceManager";

import { AbsenceTable, DatePicker, Header, Select } from "components";
import { Absence } from "models/absence.model";

function Home() {
	const [data, setData] = useState<Absence[]>([]);
	const [itemLength, setItemLength] = useState(0);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [filterDate, setFilterDate] = useState("");
	const [filterType, setFilterType] = useState("");

	const getAbsences = useCallback(
		async ({ page = 0, date = filterDate, type = filterType }) => {
			setLoading(true);
			const response = await fetchAbsence({ page, date, type });
			setPage(+response.page);
			setData(response.items);
			setItemLength(response.totalItems);
			setLoading(false);
			return;
		},
		[filterDate, filterType]
	);

	useEffect(() => {
		getAbsences({ date: filterDate, type: filterType });
	}, [getAbsences, filterDate, filterType]);

	return (
		<Box>
			<Header />
			<Box px={8} py={5} display={"flex"} flexDirection="column">
				<Box display={"flex"} flex-direction="row" justifyContent={"space-between"} alignItems={"center"}>
					<Box display={"flex"} flex-direction="row" justifyContent="flex-start" alignItems="center" gap={4}>
						<Typography>Filter By: </Typography>
						<DatePicker
							label={"Date"}
							changeHandler={({ target }: { target: HTMLInputElement }) => setFilterDate(target.value)}
						/>
						<Select
							menuItems={["sickness", "vacation"]}
							label="Type"
							selectedValue={filterType}
							handleChange={(event: SelectChangeEvent) => setFilterType(event.target.value as string)}
						/>
					</Box>
					{!loading && <Box>Total Absences: {itemLength}</Box>}
				</Box>
				<AbsenceTable
					data={data}
					getPageData={getAbsences}
					page={page}
					setPage={setPage}
					totalItems={itemLength}
					isFetching={loading}
				/>
			</Box>
		</Box>
	);
}

export default Home;
