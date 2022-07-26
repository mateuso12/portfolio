import emailjs from 'emailjs-com';
import { init } from 'emailjs-com'
import { FormContainer, Input, TextArea } from "./styles";
import apiKeys from '../../services/api/apiKeys'
import { toast } from 'react-hot-toast'

export default function Form() {
  init("user_aqY2HGa7aB2wlGZsTFyZp")
  const onSubmit=(e)=>{
    e.preventDefault()// Prevents default refresh by the browser
    emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(result => {
      toast.success('Mensagem enviada!')
    },
    error => {
    toast.error('Houve algum erro, não conseguimos enviar sua mensagem')
    })
    }

  return (
    <FormContainer onSubmit={onSubmit}>
      <Input name='name' placeholder='Nome' required />
      <Input name='subject' placeholder='E-mail' type='email' required />
      <TextArea name='message' placeholder='Mensagem' required  />
      <button type='submit'>ENVIAR</button>
    </FormContainer>
  )
}
