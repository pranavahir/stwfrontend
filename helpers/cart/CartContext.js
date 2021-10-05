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

  var nQuality = 1

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0)
    setCartTotal(Total);

    localStorage.setItem('cartList', JSON.stringify(cartItems))
  }, [cartItems])

  // Add Product To Cart
  const addToCart = (item, quantity) => {
    // toast.success("Product Added Successfully !");

    if (withDiscount(item.variants) > 0) {
      const index = cartItems.findIndex(itm => itm.asin === item.asin)
      if (index !== -1) {
        const product = cartItems[index];
        if ((quantity + product.qty) <= item.variants[0].quantity) {
          // cartItems.push({ ...item, qty: quantity,gst:gstCollection(item.variants), total: ((withDiscount(item.variants))) * quantity  });  
          setCartItems([{ ...product, ...item, qty: (quantity + product.qty), total: (withDiscount(item.variants)) * (quantity + product.qty) }])
          // setCartItems([...cartItems])
        }
      } else {
        const product = { ...item, qty: quantity, gst: gstCollection(item.variants), total: ((withDiscount(item.variants))) * quantity }
        setCartItems([...cartItems, product])
      }
    }
    else {
      toast.error("unable to add the Product, The Product isSold out !");
    }
  }

  const removeFromCart = (item) => {
    // toast.error("Product Removed Successfully !");
    setCartItems(cartItems.filter((e) => (e.asin !== item.asin)))
  }

  const removeAllItems = () => {
    setCartItems([])
  }

  const minusQty = () => {
    if (quantity > 1) {
      nQuality = quantity - 1;
      // setQuantity(qty);
      setStock('InStock')
    }
  }




  const plusQty = (item) => {
    if (item.stock != undefined) {
      if (item.stock >= quantity) {
        nQuality = quantity + 1;
        // setQuantity(qty);
      } else {
        setStock("Out of Stock !")
      }
    }
    else {
      if (item.quantity >= quantity) {
        nQuality = quantity + 1;
        // setQuantity(qty);
        // setStock("Out of Stock !")
      } else {
        setStock("Out of Stock !")
      }
    }
  }


  const ProductMinusQty = (quantity) => {
    if (quantity > 1) {
      setQuantity(ProductQuantity - 1);
      setStock('InStock')
    }
  }

  const ProductPlusQty = (quantity) => {
    if (quantity >= quantity) {
      setQuantity(quantity + 1)
    } else {
      setStock("Out of Stock !")
    }
  }

  const amazonPriceCalculation=(variantData)=>{
    var sellPrice = 0;
    if (variantData[0].frieghtrate.length == undefined) {
      sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
    }
    else {
      sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
    }
    return sellPrice;
  }

  const priceCollection = (variantData) => {
    var sellPrice = null;
    if (variantData != null && variantData != undefined) {
      if (variantData.length > 0 && (variantData[0].price || variantData[0].amazonprice)) {
        if (variantData[0].amazonprice != undefined) {
          if ((variantData[0].amazonprice > 0)) {
            if (variantData[0].overrideprice == 0) {
              if (variantData[0].frieghtrate.length == undefined) {
                sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
              }
              else {
                sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
              }
            }
            else if (variantData[0].overrideprice > 0) {
              if(variantData[0].isoverdcalculated==0){
                sellPrice = variantData[0].overrideprice;
              }
              else
              {
                if (variantData[0].frieghtrate.length == undefined) {
                  sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
                }
                else {
                  sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
                }
              }
              
            }
          }
          else {
            sellPrice = 0;
          }
        }
        else {
          if (variantData[0].overrideprice == 0) {
            if (variantData[0].frieghtrate.length == undefined) {
              sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
            }
            else {
              sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
            }
          }
          else if (variantData[0].overrideprice > 0) {
            if(variantData[0].isoverdcalculated==0){
              sellPrice = variantData[0].overrideprice;
            }
            else
            {
            if (variantData[0].frieghtrate.length == undefined) {
              sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
            }
            else {
              sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))), 0);
            }
          }
          }
        }

      }
      else {
        sellPrice = 0;
      }

    }
    return sellPrice
  }


  const gstCollection = (variantData) => {
    var gstPrice = null;

    if (variantData != null && variantData != undefined) {
      if (variantData.length > 0) {

        // gstPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].taxes / (1 + (variantData[0].taxes)))+(variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1) - Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1);
        // gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin))))))  *  variantData[0].taxes ,0)
        if (variantData[0].amazonprice != undefined) {
          
          if (variantData[0].overrideprice == 0) {
            if (variantData[0].frieghtrate.length == undefined) {
            gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
          }
          else {
            gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].amazonprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
          }
        }else{
          if(variantData[0].isoverdcalculated==0){
            gstPrice = 0
          }
          else
          {
            if (variantData[0].frieghtrate.length == undefined) {
              gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
            }
            else {
              gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
            }
        }
        }

        }
        else {
          if (variantData[0].overrideprice == 0) {
            if (variantData[0].frieghtrate.length == undefined) {
              gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
            }
            else {
              gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
            }

          }
          else
          {
            if(variantData[0].isoverdcalculated==0){
              gstPrice = 0
            }
            else
            {
              if (variantData[0].frieghtrate.length == undefined) {
                gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
              }
              else {
                gstPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].overrideprice + variantData[0].pwfee) * (1 + (variantData[0].purchasetax / 100))) + (variantData[0].frieghtrate[0])) * (1 + variantData[0].duty)) * (1 / (1 - ((variantData[0].fees / (1 + (variantData[0].fees))) + (variantData[0].margin / (1 + (variantData[0].margin)))))) * variantData[0].taxes, 0)
              }    
          }
          }

        }

      }
      else {
        gstPrice = 0;
      }
    }
    return gstPrice
  }


  const withDiscount = (variantData) => {

    var totalPrice = withTax(variantData);
    var finalPrice = 0;
    if (totalPrice > 0) {
      var discount = discountCalculation(variantData);
      finalPrice = (totalPrice * (1 - discount / 100)).toFixed(2);
    }

    return finalPrice;
  }

  function numberWithCommas(x) {
    x = x.toString();
    var afterPoint = '';
    if (x.indexOf('.') > 0)
      afterPoint = x.substring(x.indexOf('.'), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;


    // x=x.toString();
    // var lastThree = x.substring(x.length-3);
    // var otherNumbers = x.substring(0,x.length-3);
    // if(otherNumbers != '')
    //     lastThree = ',' + lastThree;
    // var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res
    // x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  const withDiscountWithQty = (variantData, qty) => {

    try {
      var finalPrice = 0;
      var totalPrice = withTax(variantData);
      if (totalPrice > 0) {
        var discount = discountCalculation(variantData);
        finalPrice = parseFloat(((totalPrice * (1 - discount / 100)) * qty).toFixed(2));
      }
    }
    catch (ex) {
      console.log(ex);
    }


    return finalPrice;
  }

  const withTax = (variantData) => {

    var totalPrice = 0;
    var sellprice = priceCollection(variantData);

    var tax = gstCollection(variantData);
    if (sellprice) {
      totalPrice = (sellprice + tax).toFixed(2);
    }

    return totalPrice;
  }


  const discountCalculation = (variantData) => {
    var discount = null;
    // CommonFun.publicMethod();
    if (variantData != null && variantData != undefined) {
      if (variantData.length > 0) {
        discount = variantData[0].discount;
      }
      else {
        discount = 0;
      }
    }
    return discount
  }

  // Update Product Quantity
  const updateQty = (item, quantity) => {

    if (withDiscount(item.variants) > 0) {
      if (quantity >= 1) {
        if (quantity <= item.variants[0].quantity) {
          const index = cartItems.findIndex(itm => itm.id === item.id)
          if (index !== -1) {
            const product = cartItems[index];
            setCartItems([{ ...product, ...item, qty: quantity, total: (withDiscount(item.variants)) * quantity }])
            // toast.info("Product Quantity Updated !");
          } else {
            const product = { ...item, qty: quantity, total: (withDiscount(item.variants)) * quantity }
            setCartItems([...cartItems, product])
          }
        }
        else {
          toast.error("Out of Stock !");
        }

      } else {
        toast.error("Enter Valid Quantity !");
      }
    }
    else {
      toast.error("unable to add the Product, The Product isSold out !");
    }


  }

  const { value } = props;
  return (
    <Context.Provider
      value={{
        ...props,
        state: cartItems, cartTotal, setQuantity, quantity, stock,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        plusQty: plusQty,
        minusQty: minusQty,
        updateQty: updateQty,
        ProductMinusQty: ProductMinusQty,
        ProductPlusQty: ProductPlusQty,
        setStock: setStock,
        gstCollection: gstCollection,
        discountCalculation: discountCalculation,
        priceCollection: priceCollection,
        withDiscount: withDiscount,
        withDiscountWithQty: withDiscountWithQty,
        numberWithCommas: numberWithCommas,
        removeAllItems: removeAllItems,
        amazonPriceCalculation: amazonPriceCalculation
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;
