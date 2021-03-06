import Button from '.'
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default{
    title: 'Components/Button',
    Component: Button
    
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    title: 'Entrar',
    Onclick: () => {},
    Color:'#FFFF',
    BgColor:'#423b32'
}