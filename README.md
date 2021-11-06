# Time

Fortunately there is [ICU support](https://github.com/denoland/deno/issues/1968) since [Deno v1.8](https://deno.com/blog/v1.8#icu-support) came out. 
So this module will evolve in providing different time related services in the future.  

Contributions are welcome.   

## Usage Example

```sh

deno run --allow-read --allow-net https://deno.land/x/time/usage-example.ts

```

```ts
import * as log from "https://deno.land/std/log/mod.ts"
import { TimeService } from "https://deno.land/x/time/mod.ts"

const countryCode = "DE";
const cityName = "Heidelberg";

const timeZone = await TimeService.getTimeZone(countryCode, cityName)
log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`)

```

## Test

```sh

deno test --allow-read --allow-net https://deno.land/x/time/test.ts
  
```

## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my
promotion link: [https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
