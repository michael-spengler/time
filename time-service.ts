import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"
// import { Time, timezone } from "./helper.ts";
import * as log from "https://deno.land/std/log/mod.ts";

export class TimeService {

    public static async getTime(countryCode: string, cityName: string): Promise<string> {

        const minutes = Number(await TimeService.getTimeZoneOffsetDST(countryCode, cityName, true))
        log.warning(minutes)
        let getDifferenceToUtcInMilisec = minutes * 60000;
        let getUTCMilisecond = new Date().getTime();

        const result = new Date(getUTCMilisecond - getDifferenceToUtcInMilisec).toISOString() //returns date based on server time


        return result.substr(11, 8)
    }

    public static async getTimeZone(countryCode: string, cityName: string): Promise<string> {

        const entry = await TimeService.getTimeZoneEntry(countryCode, cityName)

        return entry.timezone
    }

    public static async getTimeZoneOffset(countryCode: string, cityName: string, convertToMinutes: boolean = false): Promise<string> {

        const entry = await TimeService.getTimeZoneEntry(countryCode, cityName)
        if (convertToMinutes) {
            return TimeService.convertOffsetToMinutes(entry.offset).toString()
        }

        return entry.offset
    }

    public static async getTimeZoneOffsetDST(countryCode: string, cityName: string, convertToMinutes: boolean = false): Promise<string> {

        const entry = await TimeService.getTimeZoneEntry(countryCode, cityName)
        if (convertToMinutes) {
            return TimeService.convertOffsetToMinutes(entry.dayLightSavingTimeOffset).toString()
        }
        return entry.dayLightSavingTimeOffset
    }

    private static convertOffsetToMinutes(offsetString: string): number {
        const preFix = offsetString.substr(0, 1)
        const hours = Number(offsetString.substr(1, 2))
        const minutes = Number(offsetString.substr(4, 2))
        const complete = (hours * 60) + (minutes)
        log.error(preFix)
        if (preFix === '+') {
            return complete * -1
        }
        return complete
    }

    private static async getTimeZoneEntry(countryCode: string, cityName: string): Promise<any> {
        const myPath = `${Deno.cwd()}/timezones.json`
        const allTimeZones = JSON.parse(await Persistence.readFromLocalFile(myPath))


        const entry = allTimeZones.filter((e: any) => e.iso2 === countryCode && (e.city === cityName || e.city_ascii === cityName))[0]
        if (entry === undefined) {
            throw new Error(`I could not find the timezone for ${cityName} (${countryCode})`)
        }

        return entry
    }

}