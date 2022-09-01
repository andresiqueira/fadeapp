import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Form/Input',
  component: Input,
   parameters: {
    backgrounds: {
      default: 'light',
    } ,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5POR2aLuetESGo24JoLmrn/Fade-App---landing-page?node-id=612%3A118',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <div className="flex flex-col max-w-[335px]">
    <Input {...args} />
  </div>
)

export const Text = Template.bind({})
export const Email = Template.bind({})

Text.args = {
  label: 'Nome',
  type: 'text',
  name: 'nome',
  id: 'nome',
}

Email.args = {
  label: 'Email',
  type: 'email',
  name: 'nome',
  id: 'nome',
  value: 'mail@bol.com.br',
}
