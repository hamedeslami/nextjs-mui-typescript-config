'use client';

import NotFoundMessage from "@/constant/not-found";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function NotFound() {
    return (
        <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100vh"} gap={2}>
            <Image src="/assets/images/vectors/not-found.svg" alt="not found vector" width={550} height={450} />
            <Typography variant={"h5"} component={"h1"} fontWeight={'bold'}>{NotFoundMessage.TITLE}</Typography>
            <Button variant="contained">{NotFoundMessage.HOME_BUTTON}</Button>
        </Stack>
    )
}