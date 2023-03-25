
type Mods = Record<string, boolean | string>
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}


// use function above   
// const className = classNames('button', { 'button--disabled': true }, ['button--small', 'button--big']);

// console.log(className);  // button button--disabled button--small button--big





