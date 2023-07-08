type Mods = Record<string, boolean | string | undefined>

export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
