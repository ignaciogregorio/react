
import { addDoc, collection, getFirestore } from '@firebase/firestore'
import { useState } from 'react/cjs/react.development'
import { useCart } from '../../context/CartContext'
import './checkout.scss'


export const Checkout = () => {

    const {cart, cleanCart} = useCart()
    const [flag, setFlag]= useState(true)
    const [orden, setOrden]= useState(null)

    const inputs = [
        {
          label: "Nombre",
          name: "name"
        },
        {
          label: "Apellido",
          name: "surname"
        },
        {
          label: "Email",
          name: "email"
        }
      ]
      const [form, setForm] = useState({
        name: "",
        surname: "",
        email: ""
      })

      const newOrder = {
        form,
        cart
      }

      const handleChange = (e) =>{
          setForm({...form, [e.target.name]: e.target.value})
      }

      const onSubmit = () =>{

            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, newOrder).then(({id}) => setOrden(id))
            cleanCart()
            setFlag(false)
      }
      

    return(
        <div>
          {flag ?
          <>
            <form className='checkout-form'>
                {inputs.map((input)=> (
                    <div className='checkout-inputs' key={input.name}>
                        <label> {input.label}</label>
                        <input
                        value={form.name[input.name]}
                        name={input.name}
                        type="text"
                        onChange={handleChange}
                        />
                    </div>
                ))}
            </form>
            <button className='checkout-button' onClick={onSubmit}>
                Confirmar
            </button>
            </>
          : <div>Su compra fue confirmado bajo el Numero de Orden: {orden}</div> }
        </div>
        )
}