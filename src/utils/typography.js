import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerWeight: 400,
  headerFontFamily: [
    "Playfair Display"
  ],
  bodyFontFamily: ["Montserrat"],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
      ],
    },
    {
      name: 'Playfair Display',
      styles: [
        '400',
        '400i',
      ],
    },
  ],
})

export default typography