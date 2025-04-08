'use client';

import GlobalErrorMessage from "@/constant/global-error";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";


export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100vh"} gap={2}>
            <Image src="/assets/images/vectors/error-ui.svg" alt="not found vector" width={550} height={450} />
            <Typography variant={"h5"} component={"h1"} fontWeight={'bold'}>{GlobalErrorMessage.TITLE}</Typography>
            <Button variant="contained" onClick={() => reset()}>{GlobalErrorMessage.TRY_BUTTON}</Button>
        </Stack>
    )
}