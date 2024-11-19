export interface Wallpaper{
    url: string;
    name: string;
}
// This defines the structure of a wallpaper object. Any object conforming to this interface must have. This ensures type safety and provides autocompletion in your editor when working with wallpaper objects.


export function useWallpapers(): Wallpaper[]{
    return[{
        url: "https://ideogram.ai/assets/image/lossless/response/UOsyKzRNQHiVcVFDxzzRMw",
        "name": "Heritage"
    }, {
        url: "https://ideogram.ai/assets/image/lossless/response/kG4Ev5rST76dHM29xXPxjA",
        "name": "fish"
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Ltl5b_AIRR6FuJ-QVPr_bg",
        "name": "bird"
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/rD6KLXQUSlOgHzPv7qNXfw",
        "name": "pig"
    },
    
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/iWL-ErSdTH2SOktEwp5Z6w",
        "name": "monkey"
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/9R0CiG5gSV6DOImFcvHEmQ",
        "name": "cat"
    }
]
}