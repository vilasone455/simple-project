import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
require ("preline");
import { RefineNoLayout } from "./refineNoLayout";

export const decorators = [RefineNoLayout]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
