export function fetchData<T>(url: string, config = {}, errorHandler?: (response?: Response) => any): Promise<T> { // tslint:disable-line
    return fetch(url, config)
        .then(sjekkStatuskode)
        .then(response => {
            if (response.status === 204) {
                return {};
            }
            return response.json();
        })
        .catch(error => {
            if (errorHandler) {
                return errorHandler(error);
            }
            throw new Error(error);
        });
}

// tslint:disable-next-line
export function sjekkStatuskode(response: any) {

    if (
        response.status >= 200 &&
        response.status < 300 &&
        response.ok &&
        !response.redirected
    ) {
        return response;
    }
    throw new Error(response.statusText || response.type);
}
