import './itemlistcontainer.scss'
import { Itemlist } from '../itemList/ItemList';

export const Itemlistcontainer = (props) => {

    return (
        <div>
            <p className='greeting'>{props.greeting}</p>
            <Itemlist/>
        </div>
    )
}