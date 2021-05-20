import React, { useState, useEffect } from 'react';
import Context from './index';
import { toast } from 'react-toastify'

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem('cartList');
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list)
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(getLocalCartItems())
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState('InStock');

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0)
    setCartTotal(Total);

    localStorage.setItem('cartList', JSON.stringify(cartItems))
  }, [cartItems])

  // Add Product To Cart
  const addToCart = (item ,quantity) => {
    toast.success("Product Added Successfully !");
    const index = cartItems.findIndex(itm => itm.id === item.id)
    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = { ...item, ...item, qty: quantity, gst:gstCollection(item.variants), total:(gstCollection(item.variants)+(priceCollection(item.variants) - (priceCollection(item.variants) * discountCalculation(item.variants) / 100))) * quantity };
      setCartItems([...cartItems])
    } else {
      const product = { ...item, qty: quantity,gst:gstCollection(item.variants), total: (gstCollection(item.variants)+(priceCollection(item.variants) - (priceCollection(item.variants) * discountCalculation(item.variants) / 100))) }
      setCartItems([...cartItems, product])
    }
  }

  const removeFromCart = (item) => {
    toast.error("Product Removed Successfully !");
    setCartItems(cartItems.filter((e) => (e.id !== item.id)))
  }

  const minusQty = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
        setStock('InStock')
    }
}

  const plusQty = (item) => {
    if (item.stock >= quantity) {
      setQuantity(quantity + 1)
    } else {
      setStock("Out of Stock !")
    }
  }

  const priceCollection = (variantData) =>{
    var sellPrice = null;
    if(variantData !=null && variantData !=undefined)
    {
        if(variantData.length > 0)
        {
          // sellPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1);
          // sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
          sellPrice =  Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +variantData[0].pwfee ) * (1+ (variantData[0].purchasetax/100)))    + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
            // console.log(sellPrice);
        }
        else
        {
            sellPrice = 0;
        }
    }
    return sellPrice
}


const gstCollection = (variantData) =>{
  var gstPrice = null;
  
  if(variantData !=null && variantData !=undefined)
  {
      if(variantData.length > 0)
      {
        // gstPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].taxes / (1 + (variantData[0].taxes)))+(variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1) - Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1);
        // gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin))))))  *  variantData[0].taxes ,0)
        gstPrice = ROUND(((variantData[0].conversionrate *  ((variantData[0].price +variantData[0].pwfee ) * (1+ (variantData[0].purchasetax/100)))    + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin))))))  *  variantData[0].taxes ,0)
      }
      else
      {
        gstPrice = 0;
      }
  }
  return gstPrice
}

const discountCalculation = (variantData) =>{
  var discount = null;
  // CommonFun.publicMethod();
  if(variantData !=null && variantData !=undefined)
  {
      if(variantData.length > 0)
      {
          discount = variantData[0].discount;
      }
      else
      {
          discount = 0;
      }
  }
  return discount
}

   // Update Product Quantity
   const updateQty = (item, quantity) => {
     
    if(quantity >= 1 ){
      const index = cartItems.findIndex(itm => itm.id === item.id)
      if(index !== -1){
        const product = cartItems[index];
        cartItems[index] = { ...product, ...item, qty: quantity, total: ((priceCollection(item.variants) - (priceCollection(item.variants) * discountCalculation(item.variants) / 100))+gstCollection(item.variants)) * quantity  }; 
        setCartItems([...cartItems])
        toast.info("Product Quantity Updated !");
      }else{
        const product = {...item, qty: quantity, total: ((priceCollection(item.variants) - (priceCollection(item.variants) * discountCalculation(item.variants) / 100))+gstCollection(item.variants)) * quantity }
        setCartItems([...cartItems, product])
        toast.success("Product Added Updated !");
      }
    }else{
      toast.error("Enter Valid Quantity !");
    }
  }

  const { value } = props;
  return (
    <Context.Provider
      value={{
        ...props,
        state: cartItems, cartTotal,setQuantity,quantity,stock,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        plusQty: plusQty,
        minusQty:minusQty,
        updateQty:updateQty
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;
