import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '.'
import { labelStyle } from "./styles"

const { getByLabelText, getByText } = screen

describe('<Input />', () => {
  it('Should render Input', () => {
    render(<Input label='nome' name='nome' />)
    const input = getByLabelText('nome')
    expect(input).toHaveAttribute('name', 'nome')
    expect(input).toHaveAttribute('id', 'nome')
    expect(input).toBeInTheDocument()
  })

  it('Should initial value is empty',() => {
     const initialValue = ''
    render(<Input label='nome' name='nome' value={initialValue} />)
    const input = getByLabelText('nome')
    const labelInput = getByText('nome')
    expect(labelInput).toHaveClass(labelStyle + "text-[1.125rem] leading-[1.3125rem] top-1")
    input.focus()
    expect(input).toHaveFocus()
    input.blur()
    expect(input).not.toHaveFocus()
  })

  it('Should change value on type', async () => {
    render(<Input label='nome' name='nome' value='' />)
    const name = 'Lucas Roberto'
    const input = getByLabelText('nome')
    userEvent.type(input, name)

    await waitFor(() => {
      expect(input).toHaveDisplayValue('Lucas Roberto')
      const labelInput = getByText('nome')
      expect(labelInput).toHaveClass(labelStyle + "text-[0.75rem] top-[-0.215rem] leading-[0.875rem]")
      input.focus()
      expect(input).toHaveFocus()
      input.blur()
      expect(input).not.toHaveFocus()
    })
  })

  it('Should match snapshot', () => {
    render(<Input label='nome' name='nome' value=''/>)
    const input = getByLabelText('nome')
    expect(input).toMatchSnapshot()
  })
})