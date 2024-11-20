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
        "name": "Fish"
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Ltl5b_AIRR6FuJ-QVPr_bg",
        "name": "Bird"
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/rD6KLXQUSlOgHzPv7qNXfw",
        "name": "Pig"
    },
    
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/iWL-ErSdTH2SOktEwp5Z6w",
        "name": "Monkey"
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/9R0CiG5gSV6DOImFcvHEmQ",
        "name": "Cat"
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/hnZTTA-oRZG0izTclHnxsw",
        "name": "Pussy Cat"
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/pApj908xS6CbJfMMNbNL6g",
        "name": "Afraid Cat"
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/zZRyVV4uT4GWmCxEQz9BdA",
        "name": "Black Wolf"
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/jSKnfE8QSDyft0oQgHmJtQ",
        "name": "Cock"
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/PQ2GmC5sTIyCrK05ZVXXEA",
        "name": "DJ Cat"
    }
    

]
}