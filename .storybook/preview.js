// cũng có thể dùng file này để import root CSS
import "../src/index.css";

// nơi config global decorators and parameters.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
