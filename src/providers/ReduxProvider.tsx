"use client";

import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

persistStore(store);

export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>
        </Provider>
    )
}