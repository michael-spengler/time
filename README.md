# Time

Some features of this module might be obsolete as soon as the following issue is fixed:
https://github.com/denoland/deno/issues/1968


## Usage Example

```ts
  
import { TimeService } from 'https://deno.land/x/time'

const countryCode = 'DE'
const cityName = 'Heidelberg'
const timeZone = await TimeService.getTimeZone(countryCode, cityName)

log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`)

const timeZone = await TimeService.getTime(countryCode, cityName)
log.info(`The time in ${cityName} (${countryCode}) is ${time}`)


```

## Test

```sh 
   
deno test --allow-read https://deno.land/x/time/test.ts
  
   
```

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

