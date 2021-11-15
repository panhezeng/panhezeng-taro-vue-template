export default function requireContext(
  context: __WebpackModuleApi.RequireContext
): { module: any; path: string }[] {
  return context.keys().map((path: string) => {
    return { module: context(path), path };
  });
}
