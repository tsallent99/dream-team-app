import React, { useState } from 'react';
import { TextField, Button, Slider, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCreateTournamentPage } from './useCreateTournamentPage';
export const CreateTournamentFeaturePage = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(dayjs());
  const [prizePool, setPrizePool] = useState('');
  const [league, setLeague] = useState('');
  const [initialBudget, setInitialBudget] = useState(0);
  const { isLoadingLeagues, leagues } = useCreateTournamentPage();
  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setStartDate(date);
    }
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    isLoadingLeagues ? <div>Loading...</div> :
    leagues && leagues.length > 0 &&
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<FormControl onSubmit={handleSubmit}>
  <Select 
  onChange={(e) => setLeague(e.target.value as string)}
  label="Select a league"
  labelId="league-select-label"
  id="league"
  value={league}
  fullWidth
  >
  {leagues.map(league => (
    <MenuItem key={league.id} value={league.id}>{league.name}</MenuItem>
  ))}
  </Select>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <DatePicker
		label="Start Date"
		value={startDate}
		disablePast
		onChange={handleDateChange}
		slotProps={{ textField: { fullWidth: true, required: true } }}
		/>
      <TextField
        label="Prize Pool"
        type="number"
        value={prizePool}
        onChange={(e) => setPrizePool(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography gutterBottom>Initial Budget (Millions €)</Typography>
      <Slider
        value={initialBudget}
        onChange={(e, newValue) => setInitialBudget(newValue as number)}
        aria-labelledby="initial-budget-slider"
        step={1}
        min={150}
        max={400}
        valueLabelDisplay="auto"
      />
      <Button type="submit" variant="contained" color="primary">
        Create Tournament
      </Button>
    </FormControl>
    </LocalizationProvider>
    
  );
};

export default CreateTournamentFeaturePage;