export function mergeClassNames(...args: (string | undefined)[]){
    return args.filter(e => e !== undefined && e !== "").join(' ');
}