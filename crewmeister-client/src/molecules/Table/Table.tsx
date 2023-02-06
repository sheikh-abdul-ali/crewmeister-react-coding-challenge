// TODO: Change ESlint rules for errors and make them more strict.
import { SetStateAction } from "react";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

import {
	Box,
	Chip,
	Table as MUITable,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow
} from "@mui/material";

import ICalendarLink from "react-icalendar-link";

import { stringToDate } from "utils/DateUtils";

import { Absence } from "../../models/absence.model";

const TABLE_HEADER = [
	"Member Name",
	"Type of Absence",
	"From",
	"To",
	"Duration",
	"Member Note",
	"Status",
	"Admitter Note",
	"Download iCal Event"
];

function Table({ data, getPageData, page, setPage, totalItems, isFetching }) {
	const ABSENCE_STATUS = {
		REQUESTED: "Requested",
		CONFIRMED: "Confirmed",
		REJECTED: "Rejected"
	};

	type color = "success" | "info" | "error" | "warning" | "default";

	const handleChangePage = (
		_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
		newPage: SetStateAction<number>
	) => {
		setPage(newPage);
		getPageData({ page: newPage });
	};
	const statusTag = (status: string) => {
		let color: color;
		if (status === ABSENCE_STATUS.CONFIRMED) {
			color = "success";
		} else if (status === ABSENCE_STATUS.REJECTED) {
			color = "error";
		} else {
			color = "info";
		}
		return <Chip variant="outlined" color={color} label={status.toUpperCase()}></Chip>;
	};
	const absenceTypeEmoji = (type: string) => {
		return type === "vacation" ? <h1>&#127796;</h1> : <h1>&#129298;</h1>;
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
								<TableRow hover>
									{TABLE_HEADER.map((name, index) => (
										<TableCell key={index} align="center">
											{name}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((row: Absence) => {
									return (
										<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
											<TableCell component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="center">{absenceTypeEmoji(row.type)}</TableCell>
											<TableCell align="center">{row.startDate}</TableCell>
											<TableCell align="center">{row.endDate}</TableCell>
											<TableCell align="center">{row.duration}</TableCell>
											<TableCell align="center">{row.memberNote}</TableCell>
											<TableCell align="center">{statusTag(row.status)}</TableCell>
											<TableCell align="center">{row.admitterNote}</TableCell>
											<TableCell align="center">
												<ICalendarLink
													event={{
														title: row.name,
														startTime: stringToDate(row.startDate),
														endTime: stringToDate(row.endDate)
													}}
												>
													<FileDownloadIcon cursor={"pointer"} />
												</ICalendarLink>
											</TableCell>
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
