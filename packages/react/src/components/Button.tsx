import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const PaletteButton = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$md',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '16px',
        height: '16px'
    },

    '&:disabled': {
        backgroundColor: '$gray200',
        cursor: 'not-allowed'
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                backgroundColor: '$ignite500',

                '&:not(:disabled):hover': {
                    background: '$ignite300'
                },
            },
            secondary: {
                color: '$ignite300',
                border: '2px solid $ignite500',

                '&:not(:disabled):hover': {
                    background: '$ignite500',
                    color: '$white'
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    borderColor: '$gray200',
                    cursor: 'not-allowed'
                },
            },
            tertiary: {
                color: '$ignite100',

                '&:not(:disabled):hover': {
                    color: '$white'
                },

                '&:disabled': {
                    backgroundColor: '$gray600',
                },
            },
        },

        size: {
            sm: {
                height: 38
            },
            md: {
                height: 46
            },
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
});

export interface ButtonProps extends ComponentProps<typeof PaletteButton> {
    as?: ElementType;
};

PaletteButton.displayName = 'PaletteButton';