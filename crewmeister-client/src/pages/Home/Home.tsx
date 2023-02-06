import { useCallback, useEffect, useState } from "react";

import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { fetchAbsence } from "api/features/AbsenceManager/AbsenceManager";

import DatePicker from "atoms/DatePicker/DatePicker";
import Select from "atoms/Select/Select";
import { Absence } from "models/absence.model";

import Table from "../../molecules/Table/Table";

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
			<Box width={"100%"} height={75} bgcolor={"primary.main"} textAlign={"center"} />
			<Box px={10} py={5} display={"flex"} flexDirection="column">
				<Box display={"flex"} flex-direction="row" justifyContent={"space-between"} alignItems={"center"}>
					<Box display={"flex"} flex-direction="row" justifyContent="flex-start" alignItems="center" gap={4}>
						<Typography> Filter By:</Typography>
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
					<Box>Total Absences: {itemLength}</Box>
				</Box>
				<Table
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
