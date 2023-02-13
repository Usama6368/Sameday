export function formatString(str) {
  let formattedString = str.replace(/-/g, " ");
  formattedString = formattedString
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return formattedString;
}
