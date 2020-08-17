import * as log from "https://deno.land/std/log/mod.ts";
import { TimeService } from "https://deno.land/x/time";

const countryCode = "DE";
const cityName = "Heidelberg";

const time = await TimeService.getTimeByCountryAndCity(countryCode, cityName);

log.info(`In ${cityName} (${countryCode}) it is ${time} o'Clock :)`);
  

const timeZone = await TimeService.getTimeZone(countryCode, cityName);

log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`);
  

const timeByTimeZone = await TimeService.getTimeByTimeZone(timeZone);
log.info(`In ${timeZone} it is ${timeByTimeZone} o'Clock :)`)
