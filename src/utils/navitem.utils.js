export function buildNavItemPath(str) {
   if (!str.includes('/')) return str.trim()
   const toPath = str.match(/\/.*/)
   return {
      displayName: toPath.input.split('/')[0].trim(),
      path: toPath[0].trim(),
   }
}
