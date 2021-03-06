import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import moneyReducer from "./status";
import attackerReducer from "./attacker";
import domainReducer from "./domain";
import emailReducer from "./email";

export default configureStore({
    reducer: {
        timer: timerReducer,
        status: moneyReducer,
        attacker: attackerReducer,
        domain: domainReducer,
        email: emailReducer
    },
    /*
     * NOTE: This is deperecated.
     * If there are better alternative, change this later
     */
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});
