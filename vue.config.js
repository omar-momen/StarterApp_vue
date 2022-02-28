module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "Your Path From (public_html) to where the project folder resides"
      : "/",
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
    },
  },
  transpileDependencies: ["vuetify"],
};
