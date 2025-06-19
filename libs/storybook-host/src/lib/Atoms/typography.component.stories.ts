import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura/typography';

const meta: Meta<TypographyComponent> = {
	component: TypographyComponent,
	render: (args) => ({
		props: args,
		/*
      class ComponenteExternoTitle1 {
        @Input() variant = 'title1'
      }
    */
		template: `
      <ab-typography ${argsToTemplate(args)}>
        Text
      </ab-typography>
    `,
	}),
};
export default meta;
type Story = StoryObj<TypographyComponent>;

export const Primary: Story = {
	args: {
		variant: 'title1',
		size: 'xs',
	},
};

export const Title1: Story = {
	args: {
		variant: 'title1',
	},
};

export const Title2: Story = {
	args: {
		variant: 'title2',
	},
};

export const Title3: Story = {
  args: {
    variant: 'title3',
  },
};

export const Title2WithMediumSize: Story = {
	args: {
		...Title2.args,
		size: 'md',
	},
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
};

export const TextLarge: Story = {
	args: {
		variant: 'normal',
	},
};

export const TextMedium: Story = {
	args: {
		...TextLarge.args,
		size: 'md',
	},
};

export const TextSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'sm',
  },
};

export const TextExtraSmall: Story = {
  args: {
    ...TextLarge.args,
    size: 'xs',
  },
};

export const Paragraph: Story = {
    args: {
        ...Title2.args,
        size: 'md',
    },
    render: (args) => ({
        props: args,
        template: `
            <p>
                <ab-typography ${argsToTemplate(args)}>
                    Novo conteúdo
                </ab-typography>
            </P>
        `,
    }),
};
