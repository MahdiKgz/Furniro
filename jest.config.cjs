module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // برای تبدیل فایل‌های JS و JSX
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // برای Mock کردن استایل‌ها
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
