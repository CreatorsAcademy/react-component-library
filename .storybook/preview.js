/* export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} */

import React from "react";
//import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/index";

//addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
    (Story, context) => (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    ),
];
