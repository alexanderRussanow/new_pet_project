export function getQueryParams( params: Record<string, string> ) {
    const searchParams = new URLSearchParams( window.location.search );
    Object.entries( params ).forEach( ( [
        key,
        value
    ] ) => {
        if ( value ) {
            searchParams.set(
                key,
                value 
            );
        }
    } );
    return `?${ searchParams.toString() }`;
}

export function addQueryParams( params: Record<string, string> ) {
    window.history.pushState(
        {},
        '',
        getQueryParams( params ).toString() 
    );
}
