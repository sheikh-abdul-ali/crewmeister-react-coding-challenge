// TODO: Change ESlint rules for errors and make them more strict.
import { SetStateAction, useCallback, useEffect, useState } from "react";

import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow
} from "@mui/material";
import { fetchAbsence } from "api/features/AbsenceManager/absenceManager";
import { Absence } from "models/absence.model";

function Routes() {
	const [data, setData] = useState<Absence[]>([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const getAbsences = useCallback(async () => {
		const apiData = await fetchAbsence();
		setData(apiData.items);
		return;
	}, []);

	useEffect(() => {
		getAbsences();
	}, [getAbsences]);

	const handleChangePage = (
		_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
		newPage: SetStateAction<number>
	) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
							return (
								<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										{row.memberNote}
									</TableCell>
									<TableCell align="right">{row.crewId}</TableCell>
									<TableCell align="right">{row.userId}</TableCell>
									<TableCell align="right">{row.startDate}</TableCell>
									<TableCell align="right">{row.admitterId}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10]}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</>
	);
}

export default Routes;
