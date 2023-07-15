export type LongButtonType = {
    childrenComponent?: JSX.Element,
    handleButtonClick: () => void,
    style?: string,
    text?: string
}

export type navbarItem = {
    title: string,
    isFocused: boolean
}

export type menuItem = {
    height: number,
    path: string,
    isFocused: boolean,
    title: string,
}

