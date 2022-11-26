type Mods = Record<string, boolean | string | undefined>;

export const classNames = ( cls: string, mods: Mods = {}, additionalClasses: Array<string | undefined> = [] ) =>
    [
        cls,
        ...Object.entries( mods )
            .filter( ( [
                _,
                value
            ] ) => Boolean( value ) )
            .map( ( [
                className
            ] ) => className ),
        ...additionalClasses.filter( Boolean ),
    ]
        .join( ' ' )
        .replace(
            /\s+/g,
            ' ' 
        )
        .trimEnd();
