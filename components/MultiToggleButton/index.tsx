import React, { CSSProperties, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    value: string;
    onChangeValue: (value: string) => void;
    options: Option[];
}

const MultiToggleButton: React.FC<IProps> = ({
                                                 name, value, onChangeValue, options,
                                                 className, ...props
                                             }) => {
    return (
        <div className={cn(styles.multiToggleButton)}
             {...props}
        >
            <span className={styles.label}>
                {name}
            </span>

            <ul className={styles.toggleList}
                style={{
                    '--max-index': `${options.length}`,
                    '--active-index': `${options.findIndex(({ value: _value }) => _value === value)}`
                } as CSSProperties}
            >
                {options.map(({ label, value: _value }, index) => (
                    <li key={index}
                        className={cn({
                            [styles.active]: _value,
                        })}
                        onClick={_ => onChangeValue(_value)}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultiToggleButton;
