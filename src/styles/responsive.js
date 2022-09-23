export const browserWidth = {
  xs: '549px',
  sm: '550px',
  md: '1023px',
};

export const reponsive = {
  sm: `screen and (max-width: ${browserWidth.xs})`,
  md: `screen and (min-width: ${browserWidth.sm}) and (max-width: ${browserWidth.md})`,
  lg: `screen and (max-width: ${browserWidth.md})`,
};
