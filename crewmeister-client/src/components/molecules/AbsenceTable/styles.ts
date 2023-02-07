import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { styled } from "@mui/material";

export const Icon = styled(FileDownloadIcon)`
	color: ${props => props.theme.palette.primary.main};
	opacity: 0.85;
	cursor: pointer;
`;
