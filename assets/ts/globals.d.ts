declare function require(module: string): any;

declare module "headroom.js";
declare module "isotope-layout";

declare const Headroom: any;
declare const Isotope: any;

interface Window {
    bootstrap: any;
    Headroom: any;
    Isotope: any;
    iiifAnimations: any;
    showTab: any;
}
