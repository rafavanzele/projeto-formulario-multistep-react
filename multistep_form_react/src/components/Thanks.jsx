// Importando emojis
import {BsFillEmojiHeartEyesFill, BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill, BsEmojiHeartEyesFill} from 'react-icons/bs'

// Estilos
import './Thanks.css'



const emojiData = {
  unsatisfied: <BsEmojiFrownFill/>,
  neutral: <BsEmojiNeutralFill/>,
  satisfied: <BsEmojiSmileFill/>,
  very_satisfied: <BsEmojiHeartEyesFill/>
}


const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante. Em breve você recebrá um cupom de desconto para sua próxima compra</p>
        <p>Para concluir sua avaliação, clique no botão de Enviar abaixo</p>

        <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
        <p className="review-data">
          <span>Satisfação com o produto: </span>
          {emojiData[data.review]}
        </p>

        <p className="review-data">
          <span>Comentário: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks