// Importando emojis de avaliação
import {BsFillEmojiHeartEyesFill, BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill, BsEmojiHeartEyesFill} from 'react-icons/bs'

// ESTILOS
import './ReviewForm.css'

const ReviewForm = () => {
  return (
    <div className='review-form'>
      
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value='unsatisfied' name='review' required />
          <BsEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value='neutral' name='review' required />
          <BsEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input type="radio" value='satisfied' name='review' required />
          <BsEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value='very_satisfied' name='review' required />
          <BsEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>

      
      <div className="form-control">
        <label htmlFor="comment">Comentário: </label>
        <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência com nosso produto' required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm