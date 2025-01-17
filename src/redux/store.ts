import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

middlewares.push(thunk);

const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(
  rootReducer,
  composeWithDevTools(middlewareEnhancer)
);

export const persistor = persistStore(store);

export default { store, persistor };
