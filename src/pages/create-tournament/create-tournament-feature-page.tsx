import { useForm, Controller } from "react-hook-form";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
	FormControl,
	TextField,
	Button,
	Select,
	MenuItem,
	Typography,
	Slider,
} from "@mui/material";
import dayjs from "dayjs";
import { useCreateTournamentPage } from "./useCreateTournamentPage";

interface TournamentFormData {
	name: string;
	startDate: Dayjs;
	prizePool: string;
	league: string;
	initialBudget: number;
}

export const CreateTournamentFeaturePage = () => {
	const { control, handleSubmit } = useForm<TournamentFormData>({
		defaultValues: {
			name: "",
			startDate: dayjs(),
			prizePool: "",
			league: "",
			initialBudget: 150,
		},
	});

	const { isLoadingLeagues, leagues, createTournament, isCreatingTournament } =
		useCreateTournamentPage();

	const onSubmit = (data: TournamentFormData) => {
		createTournament({
			name: data.name,
			associatedLeague: parseInt(data.league),
			startDate: data.startDate.format("YYYY-MM-DD"),
			prizePool: parseInt(data.prizePool),
			initialBudget: data.initialBudget,
		});
	};

	return isLoadingLeagues ? (
		<div>Loading...</div>
	) : leagues && leagues.length > 0 ? (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="league"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							label="Select a league"
							labelId="league-select-label"
							id="league"
							fullWidth
						>
							{leagues.map((league) => (
								<MenuItem key={league.id} value={league.id}>
									{league.name}
								</MenuItem>
							))}
						</Select>
					)}
				/>

				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<TextField {...field} label="Name" fullWidth margin="normal" />
					)}
				/>

				<Controller
					name="startDate"
					control={control}
					render={({ field }) => (
						<DatePicker
							{...field}
							label="Start Date"
							disablePast
							slotProps={{ textField: { fullWidth: true, required: true } }}
						/>
					)}
				/>

				<Controller
					name="prizePool"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label="Prize Pool"
							type="number"
							fullWidth
							margin="normal"
						/>
					)}
				/>

				<Typography gutterBottom>Initial Budget (Millions €)</Typography>
				<Controller
					name="initialBudget"
					control={control}
					render={({ field }) => (
						<Slider
							{...field}
							aria-labelledby="initial-budget-slider"
							step={1}
							min={150}
							max={400}
							valueLabelDisplay="auto"
						/>
					)}
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={isCreatingTournament}
				>
					Create Tournament
				</Button>
			</FormControl>
		</LocalizationProvider>
	) : (
		<div>No leagues found</div>
	);
};

export default CreateTournamentFeaturePage;
