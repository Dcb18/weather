import { Clouds } from './clouds';
import { Wind } from './wind';
import { Weather } from './weather';
import { Coord } from './coord';
import { Main } from './main';
export class WeatherMap {
    public coord: Coord;
    public weather: Weather;
    public base: string;
    public main: Main;
    public visibility: number;
    public wind: Wind;
    public clouds: Clouds;
    public dt: Date;
}
