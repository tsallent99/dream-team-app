import { useEffect } from "react"
import { getAllPlayers } from "../modules/infrastructure/api/api"
import { Box, Typography } from "@mui/material"

const TournamentsView = () => {
useEffect(() => {
    getAllPlayers().then((response) => {
        console.log(response.data);
    })
}, [])
    return (
        
        <Box>
            <Typography variant="h2">My tournaments</Typography>
        </Box>
        
        
    )
}

export default TournamentsView