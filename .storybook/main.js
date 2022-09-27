module.exports = {
  stories: ["../src/components/**/*.stories.js"], // danh sách file được xem là stories
  staticDirs: ["../public"], // chỉ định thư mục static mà storybook sẽ hiểu
  addons: [
    // các plugin hỗ trợ một tính năng nào đó cho storybook
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react", // config để storybook hiểu nó đang làm việc với framework nào
  core: {
    builder: "@storybook/builder-webpack5", // config builder cho storybook thường là webpack
  },
  features: {
    // nơi gán các cài đặt cho storybook và các addon của nó
    interactionsDebugger: true,
  },
};
