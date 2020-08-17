# Time

Some features of this module might be obsolete as soon as the following issue is
fixed: https://github.com/denoland/deno/issues/1968

## Usage Example

```ts
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

```

## Test

```sh

deno test --allow-read https://deno.land/x/time/test.ts
  
```

## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my
promotion link: [https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
