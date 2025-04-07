'use client';

import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { BoxStyled } from "./styledComponents";
import HomeMessage from "@/constant/home";

export default function Home() {
  return (
    <BoxStyled>
      <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"} height={"100vh"} gap={2}>
        <Image src="/assets/images/logo.webp" alt="logo" width={700} height={211}/>
        <Typography variant={"h5"} component={"h1"}>{HomeMessage.TITLE}</Typography>
        <Typography variant={'body1'} component={'p'}>{HomeMessage.DESCRIPTION}</Typography>
      </Stack>
    </BoxStyled>
  );
}