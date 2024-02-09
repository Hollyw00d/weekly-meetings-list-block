// Redux-like store using WP Data API
import { createReduxStore, register } from "@wordpress/data";

import reducer from "./reducer";
import * as selectors from "./selectors";
import * as actions from "./actions";
import { STORE_NAME } from "./types";

const store = createReduxStore(STORE_NAME, {
	reducer,
	selectors,
	actions,
});

register(store);
