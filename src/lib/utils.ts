// src/lib/utils.ts

/**
 * Utility function for conditionally joining class names together.
 * Handles undefined, null, and boolean values gracefully.
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
};
