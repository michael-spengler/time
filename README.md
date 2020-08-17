# Time

## Usage Example

```ts
  
import { TimeService } from './time-service.ts'

const countryCode = 'DE'
const cityName = 'Heidelberg'
const timeZone = await TimeService.getTimeZone(countryCode, cityName)

log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`)

const timeZone = await TimeService.getTime(countryCode, cityName)
log.info(`The time in ${cityName} (${countryCode}) is ${time}`)


```

## Test

```sh 
   
deno test test.ts --allow-read
  
   
```