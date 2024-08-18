import { Box, Typography } from "@mui/material"
import { useGetUserTournaments } from "../modules/application/tournament/use-get-user-tournaments"

const HomePage = () => {
    const { tournaments, isPending, isError } = useGetUserTournaments()
    return (
        <>
        <Box>
            <Typography variant="h2">My tournaments</Typography>
        </Box>
        {
           tournaments && tournaments?.map((tournament) => (
                <Box>
                    <Typography variant="body1">
                        {tournament.name}
                    </Typography>
                    <Typography variant="body2">
                        {tournament.prizePool} €
                    </Typography>
                </Box>
            ))
        }
        </>
    )
}

export default HomePage