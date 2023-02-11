import React, { HTMLAttributes, useEffect } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/Button';
import { Key, KeyType } from 'types/key';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    keys: Key[];
    onPress: (keyType: KeyType) => void;
}

const CalculatorKeypad: React.FC<IProps> = ({ keys, onPress }) => {
    const onKeyDown = (e: KeyboardEvent) => {
        const buttonElement = window.document.getElementById(`keypad-button-${e.key}`.toLowerCase());
        if (!buttonElement) {
            return;
        }
        buttonElement.click();
    }

    useEffect(() => {
        window.document.addEventListener('keydown', onKeyDown);

        return () => {
            window.document.removeEventListener('keydown', onKeyDown);
        }
    }, []);

    return (
        <div className={cn(styles.calculatorKeypad)}>
            {keys.map(({ keyType, keyOverride, variant }, index) => (
                <Button id={`keypad-button-${keyOverride ? keyOverride : keyType}`.toLowerCase()}
                        key={index}
                        variant={variant}
                        onClick={_ => onPress(keyType)}
                        onKeyDown={e => e.preventDefault()}
                >
                    {keyType}
                </Button>
            ))}
        </div>
    );
};

export default CalculatorKeypad;
