import { createGlobalStyle } from "styled-components";
import { theme } from "utils/theme";
import { mediaMin } from "utils/functions";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: ${theme.colors.text};
        ${theme.typography.fontFamily};
    }

    html, body{
        min-height: 100%;
        background: ${theme.colors.background};

        font-size: 0.75em;
    }

    ${mediaMin(theme.device.breakPoints.tablet)}{
        html, body{
            font-size: 1em;
        }
    }
`;

/*
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: ${theme.colors.text};
        ${theme.typography.fontFamily};
    }

    html, body{
        min-height: 100%;
        background: ${theme.colors.background};

        font-size: ${theme.typography.baseSize * 0.8}px;
    }

    ${mediaMin(theme.device.breakPoints.tablet)}{
        html, body{
            font-size: ${theme.typography.baseSize}px;
        }
    }
`
*/
