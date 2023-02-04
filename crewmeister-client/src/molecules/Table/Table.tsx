// TODO: Change ESlint rules for errors and make them more strict.
import { SetStateAction, useState } from "react";

import {
	Box,
	Table as MUITable,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow
} from "@mui/material";

const TABLE_HEADER = ["Member Name", "Type of Absence", "Period", "Member Note", "Status", "Admitter Note"];

function Table({ data, getPageData, totalItems, isFetching }) {
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleChangePage = (
		_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
		newPage: SetStateAction<number>
	) => {
		setPage(newPage);
		getPageData(newPage);
	};

	return (
		<Box>
			{isFetching ? (
				<Box>Loading....</Box>
			) : (
				<>
					<TableContainer component={Paper}>
						<MUITable sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									{TABLE_HEADER.map((name, index) => (
										<TableCell key={index} align="center">
											{name}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map(row => {
									return (
										<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
											<TableCell component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="center">{row.type}</TableCell>
											<TableCell align="center">{row.userId}</TableCell>
											<TableCell align="center">{row.admitterNote}</TableCell>
											<TableCell align="center">{row.admitterId}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</MUITable>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10]}
						component="div"
						count={totalItems}
						rowsPerPage={10}
						page={page}
						onPageChange={handleChangePage}
					/>
				</>
			)}
		</Box>
	);
}

export default Table;
