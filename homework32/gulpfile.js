const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync").create();

const styles = () => {
  return src("public/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("main.min.css"))
    .pipe(dest("public/css"))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src("public/js/main.js")
    .pipe(
      webpack({
        devtool: "source-map",
        mode: "development",
        output: {
          filename: "main.min.js",
        },
      })
    )
    .pipe(dest("public/js"))
    .pipe(browserSync.stream());
};

const watching = () => {
  watch(["public/scss/main.scss"]).on("change", browserSync.reload);
  watch(["public/js/main.js"]).on("change", browserSync.reload);
  watch("public/*.html").on("change", browserSync.reload);
};

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
  });
};

exports.default = parallel(styles, scripts, browsersync, watching);
