import LoadingMessage from "@/constant/loading";
import { CircularProgress, Stack, Typography } from "@mui/material";

export default function Loading() {
    return (
        <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100vh"} gap={2}>
            <CircularProgress />
            <Typography variant={"h5"} component={"h1"} fontWeight={'bold'}>{LoadingMessage.TITLE}</Typography>
        </Stack>
    )
}

