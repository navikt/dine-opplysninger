
export const isNothingOrEmpty = (val: any): boolean => {
    if (!val) {
        return true;
    } else if (typeof val === 'object') {
        return Object.keys(val).length === 0;
    }

    return false;
};
