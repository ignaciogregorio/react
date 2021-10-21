import './itemlistcontainer.scss'
import { Itemcount } from "..//itemCount/ItemCount";
import { Itemlist } from '../itemList/ItemList';

export const Itemlistcontainer = (props) => {

    return (
        <div>
            <p className='greeting'>{props.greeting}</p>
            <Itemcount stock ='5' initial='1' />
            <Itemlist/>
        </div>
    )
}