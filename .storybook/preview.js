import "../src/index.css";

//👇 Configures Storybook to log the actions in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
