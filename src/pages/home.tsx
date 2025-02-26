import { Alert, Box, Button, CircularProgress, Container, Grid, Typography } from "@mui/material"
import { useGetUserTournaments } from "../modules/application/tournament/use-get-user-tournaments"
import TournamentCard from "../widgets/tournaments-view/tournamentCard"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    const { tournaments, isPending, isError } = useGetUserTournaments()
    const createTournament = () => {
        navigate('/create-tournament')
    }
    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    My Tournaments
                </Typography>
            </Box>
            
            {isPending && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            {isError && (
                <Box sx={{ marginY: 4 }}>
                    <Alert severity="error">Failed to load tournaments. Please try again later.</Alert>
                </Box>
            )}

            {tournaments && tournaments.length > 0 ? (
                <Grid container spacing={4}>
                    {tournaments.map((tournament) => (
                        <Grid item xs={12} sm={6} md={4} key={tournament.id}>
                            <TournamentCard 
                                name={tournament.name} 
                                leagueName={tournament.name} 
                                logo={tournament.logo} 
                                prizePool={tournament.prizePool} 
                                startDate={tournament.startDate} 
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                !isPending && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                        <Typography variant="body1" color="text.secondary">No tournaments available.</Typography>
                        <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onClick={createTournament}>Create Tournament</Button>
                    </Box>
                )
            )}
        </Container>
    );
}

export default HomePage