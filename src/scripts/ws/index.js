import WS_development from "@scripts/ws/ws.js";
import WS_local from "@scripts/ws/ws.local.js";
import WS_production from "@scripts/ws/ws.production.js";
import { mode } from "@scripts/const.js";

let WS = null;

if (mode === "development") WS = WS_development;
else if (mode === "local") WS = WS_local;
else WS = WS_production;

export default WS;
