import * as LG from "liquid-glass-react";
import type { ComponentType } from "react";

// liquid-glass-react ships CJS/ESM interop that nests the default export differently under SSR.
type Mod = { default?: Mod | ComponentType<any> } & ComponentType<any>;
const unwrap = (m: Mod): ComponentType<any> => (typeof m === "function" ? m : unwrap(m.default as Mod));

const Glass = unwrap(LG as unknown as Mod);
export default Glass;
