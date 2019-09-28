const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-feature-list-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\components\\FeatureList.js"))),
  "component---src-components-feature-layout-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\components\\featureLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\pages\\404.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\pages\\features.js"))),
  "component---src-pages-form-success-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\pages\\formSuccess.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\calum\\Web Dev\\Gatsby\\johndory\\src\\pages\\index.js")))
}

