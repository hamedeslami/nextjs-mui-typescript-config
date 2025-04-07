import { configureStore } from "@reduxjs/toolkit";

import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { rootReducers } from "./rootReducers";

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null)
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value)
        },
        removeItem(_key: string) {
            return Promise.resolve()
        },
    }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                thunk: true,
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);