// npm run postcss
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html'],
      whitelist : [ 
        "html", 
        "body" ,
        "modal-backdrop",
        "collapsing",
        "was-validated",
        "tooltip-arrow",
        "tooltip-inner",
        "dropdown-menu.show",
      ]
    })
  ]
}
