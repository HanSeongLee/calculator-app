import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const Button: React.FC<IProps> = ({ variant, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.default]: variant === 'default',
        }, className)}
                type={'button'}
                {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'default',
};

export default Button;
