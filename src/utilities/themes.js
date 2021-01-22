import { primary, secondary, tertiary, neutral } from "./colors";
import { primaryFont } from "./typography";

const Theme = {
    breakpoints: {
        small: "only screen and (max-width: 65rem)",
        medium: "only screen and (max-width: 70rem)"
    }
}

export const defaultTheme = {
    primaryColor: primary[100],
    primaryActiveColor: primary[300],
    thirdPrimaryColor: primary[300],
    secondaryActiveColor: secondary[300],
    secondaryColor: secondary[100],
    tertiaryColor: tertiary[300],
    fourthNeutral: neutral[400],
    lightestColor: neutral[500],
    helperTextColor: neutral[300],

    headingsColor: neutral[200],
    textColor: neutral[200],
    textColorInverted: neutral[500],

    primaryFont: primaryFont
}

export const darkTheme = {
    primaryColor: primary[100],
    primaryActiveColor: primary[300],
    secondaryActiveColor: secondary[300],
    secondaryColor: secondary[100],
    tertiaryColor: tertiary[300],

    textColor: neutral[200],
    textColorInverted: neutral[500],

    primaryFont: primaryFont
}

export default Theme;