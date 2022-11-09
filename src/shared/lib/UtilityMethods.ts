type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additionalClasses: string[] = []) => [
    cls,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ')
    .replace(/\s+/g, ' ')
    .trimEnd();