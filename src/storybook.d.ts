declare module '@storybook/vue3-vite' {
  export type Meta<TComponent = unknown> = Record<string, unknown> & {
    title?: string;
    component?: TComponent;
    args?: Record<string, unknown>;
  };

  export type StoryObj<TComponent = unknown> = Record<string, unknown> & {
    args?: Record<string, unknown>;
  };

  export type Preview = Record<string, unknown> & {
    parameters?: Record<string, unknown>;
  };

  export type StorybookConfig = Record<string, unknown> & {
    stories?: string[];
    addons?: string[];
    framework?: { name: string; options?: Record<string, unknown> };
  };
}
