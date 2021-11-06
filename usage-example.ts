import * as log from "https://deno.land/std/log/mod.ts"
import { TimeService } from "https://deno.land/x/time/mod.ts"

const countryCode = "DE";
const cityName = "Heidelberg";

const timeZone = await TimeService.getTimeZone(countryCode, cityName)
log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`)

