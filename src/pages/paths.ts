import { HomePage } from "./Home";
import { PageTwo } from "./PageTwo";
import { RouterPaths } from "./types";

export enum pathsLocations {
    homePage = '/',
    page2 = '/page2'


}

export const routerPaths: RouterPaths[] = [
    {
        path: pathsLocations.homePage,
        component: HomePage
    },
    {
        path: pathsLocations.page2,
        component: PageTwo
    }
]
