import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand-500)',
        surface: 'var(--color-surface)',
        foreground: 'var(--color-text-primary)',
      },
      borderRadius: {
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      spacing: {
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
      },
      fontFamily: {
        sans: ['"Work Sans"', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
} satisfies Config;
