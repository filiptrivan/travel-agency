import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

export const ThemePreset = definePreset(Aura, {
  semantic: {
    surface: {
      0: '#e5e7eb',
    },
    primary: {
      50: '{pink.50}',
      100: '{pink.100}',
      200: '{pink.200}',
      300: '{pink.300}',
      400: '{pink.400}',
      500: '{pink.500}',
      600: '{pink.600}',
      700: '{pink.700}',
      800: '{pink.800}',
      900: '{pink.900}',
      950: '{pink.950}',
      color: '{pink.600}',
      contrastColor: '{surface.0}',
      hoverColor: '{pink.500}',
      activeColor: '{pink.400}',
    },
  },
  components: {
    panel: {
      colorScheme: {
        dark: {
          root: {
            header: {
              background: '{surface.900}',
            },
            background: '{surface.800}',
          },
        },
      },
    },
  },
});
