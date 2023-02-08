import { Theme } from 'types/theme';
import React, { useEffect, useState } from 'react';

export enum ActionType {
    CHANGE_THEME,
}

const initialValue = {
    theme: Theme.THEME_1,
    dispatch: (actionType: ActionType, payload: unknown) => {},
};

export const ThemeContextWrapper: React.FC = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.CHANGE_THEME: {
                setValue({
                    ...value,
                    theme: payload as Theme,
                });
                window.localStorage.setItem('theme', (payload as Theme).toString());
                return;
            }
            default:
                return;
        }
    };

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localTheme = window.localStorage.getItem('theme');
        console.log(localTheme)
        let theme = localTheme && localTheme !== 'undefined' ? localTheme as Theme :
            isDark ? Theme.THEME_3 : Theme.THEME_1;

        dispatch(ActionType.CHANGE_THEME, theme);
    }, []);

    useEffect(() => {
        const htmlElement = window.document.querySelector('html');
        const { theme } = value;

        if (!htmlElement) {
            return;
        }

        const filteredTheme: string[] = Object.values(Theme)
            .filter((_theme) => _theme != theme)
            .map((_theme) => `theme-${_theme}`);

        htmlElement.classList.remove(...filteredTheme);
        htmlElement.classList.add(`theme-${theme}`);
    }, [value]);

    return (
        <ThemeContext.Provider value={{
            ...value,
            dispatch,
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export const ThemeContext = React.createContext(initialValue);
