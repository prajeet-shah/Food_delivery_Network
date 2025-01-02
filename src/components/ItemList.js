
import { useDispatch } from "react-redux";
import APP_URL from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch()
 const handleAddItems = (item)=>{
        dispatch(addItems(item));
 }

  return (
    <div>
      
      {
        items.map((item)=> (
            <div className="border-b-2 flex justify-between" key={item.card.info.id}>
            <div className="w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <h3 className="font-bold">Rs. {item.card.info.defaultPrice/100  || item.card.info.price/100}</h3> 
              <p className="">{item.card.info.description}</p>
            </div>
            <div className="w-3/12  m-2 p-2">
              <button className="bg-black text-white py-2 px-3 rounded-md relative top-10 left-20" onClick={()=>handleAddItems(item)}>Add+</button>
              <img  src={APP_URL + item.card.info.imageId}/>
            </div>
            </div>
        ))
      }
    </div>
  );
};

export default ItemList;
