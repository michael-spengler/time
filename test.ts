import { TimeService } from './time-service.ts'
import * as log from "https://deno.land/std/log/mod.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"


Deno.test("get time by offset", async (): Promise<void> => {

    const offset = '+02:00'

    const time = await TimeService.getTimeByOffset(offset)

    log.info(`The time for offset ${offset} is ${time}`)

});

Deno.test("get timezone", async (): Promise<void> => {

    const countryCode = 'DE'
    const cityName = 'Heidelberg'

    const timeZone = await TimeService.getTimeZone(countryCode, cityName)

    log.info(`The timezone of ${cityName} (${countryCode}) is ${timeZone}`)

    assertEquals('Europe/Berlin', timeZone)
});


Deno.test("get offset", async (): Promise<void> => {

    const countryCode = 'DE'
    const cityName = 'Heidelberg'

    const offset = await TimeService.getTimeZoneOffset(countryCode, cityName)

    log.info(`offset: ${offset}`)

    const offsetInminutes = await TimeService.getTimeZoneOffset(countryCode, cityName, true)

    log.info(`offset in minutes: ${offsetInminutes}`)
});


Deno.test("get daylight saving time offset", async (): Promise<void> => {

    const countryCode = 'DE'
    const cityName = 'Heidelberg'

    const offsetDST = await TimeService.getTimeZoneOffsetDST(countryCode, cityName)

    log.info(`offsetDST: ${offsetDST}`)


    const offsetDSTInminutes = await TimeService.getTimeZoneOffsetDST(countryCode, cityName, true)

    log.info(`offset daylight saving time in Minutes: ${offsetDSTInminutes}`)
});
