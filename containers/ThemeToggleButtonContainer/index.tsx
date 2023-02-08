import React, { HTMLAttributes, useContext } from 'react';
import MultiToggleButton from 'components/MultiToggleButton';
import { ThemeOptions } from 'types/theme';
import { ActionType, ThemeContext } from 'lib/ThemeContext';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ThemeToggleButtonContainer: React.FC<IProps> = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    const onChangeValue = (value: string) => {
        dispatch(ActionType.CHANGE_THEME, value);
    };

    return (
        <div>
            <MultiToggleButton name={'Theme'}
                               value={theme}
                               onChangeValue={onChangeValue}
                               options={ThemeOptions}
            />
        </div>
    );
};

export default ThemeToggleButtonContainer;
