import React, { useState, useEffect,useContext } from 'react';
import { CurrencyContext } from '../Currency/CurrencyContext';
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
  const CurContect = useContext(CurrencyContext);
  const [cartItems, setCartItems] = useState(getLocalCartItems())
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState('InStock');
  const country = CurContect.state.country;

  var nQuality = 1

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0)
    setCartTotal(Total);

    localStorage.setItem('cartList', JSON.stringify(cartItems))
  }, [cartItems])

  // Add Product To Cart
  const addToCart = (item, quantity) => {
    // toast.success("Product Added Successfully !");

    if (withDiscount(item) > 0) {
      const index = cartItems.findIndex(itm => itm.asin === item.asin)
      if (index !== -1) {
        const product = cartItems[index];
        if ((quantity + product.qty) <= item.variants[0].quantity) {
          // cartItems.push({ ...item, qty: quantity,gst:gstCollection(item), total: ((withDiscount(item))) * quantity  });  
          setCartItems([{ ...product, ...item, qty: (quantity + product.qty), total: (withDiscount(item)) * (quantity + product.qty) }])
          // setCartItems([...cartItems])
        }
      } else {
        const product = { ...item, qty: quantity, gst: gstCollection(item), total: ((withDiscount(item))) * quantity }
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

  const amazonPriceCalculation=(objProduct)=>{
    var sellPrice = 0;
    if (objProduct.variants[0].frieghtrate.length == undefined) {
      sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
    }
    else {
      sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
    }
    return sellPrice;
  }
  const priceCollection = (objProduct) => {
    var sellPrice = null;
    if (objProduct.variants != null && objProduct.variants != undefined) {
        if (objProduct.variants.length > 0 && (objProduct.variants[0].price || objProduct.variants[0].amazonprice || objProduct.variants[0].overrideprice)) {

            if (objProduct.variants[0].overrideprice > 0 ) {

                    if (objProduct.variants[0].isoverdcalculated == 0 && objProduct.fromcountry == country) {
                        sellPrice = objProduct.variants[0].overrideprice;
                    }
                    else {
                        if (objProduct.variants[0].frieghtrate.length == undefined) {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                        else {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                    }
                }
                else if (objProduct.variants[0].amazonprice != undefined) {
                    if ((objProduct.variants[0].amazonprice > 0)) {
                        if (objProduct.variants[0].frieghtrate.length == undefined) {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                        else {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                    }
                    else {
                        if (objProduct.variants[0].frieghtrate.length == undefined) {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                        else {
                            sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                        }
                    }
                }
                else {
                    if (objProduct.variants[0].frieghtrate.length == undefined) {
                        sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                    }
                    else {
                        sellPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))), 0);
                    }
                }
            }
            else {
                sellPrice = 0;
            }

        }
        return sellPrice
}


  const gstCollection = (objProduct) => {
    var gstPrice = null;

    if (objProduct != null && objProduct != undefined) {
      if (objProduct.length > 0) {

        // gstPrice = Math.floor(((objProduct.variants[0].conversionrate *  ((objProduct.variants[0].price +2 ) * 1.0825 )  + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1/(1-((objProduct.variants[0].taxes / (1 + (objProduct.variants[0].taxes)))+(objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees)))+(objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))),-1) - Math.floor(((objProduct.variants[0].conversionrate *  ((objProduct.variants[0].price +2 ) * 1.0825 )  + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1/(1-((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees)))+(objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))),-1);
        // gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price +2 ) * 1.0825 )  + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1/(1-((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees)))+(objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin))))))  *  objProduct.variants[0].taxes ,0)
        if (objProduct.variants[0].amazonprice != undefined) {
          
          if (objProduct.variants[0].overrideprice == 0) {
            if (objProduct.variants[0].frieghtrate.length == undefined) {
            gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
          }
          else {
            gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].amazonprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
          }
        }else{
          if((objProduct.variants[0].isoverdcalculated == 0 && objProduct.variants[0].overrideprice > 0) && objProduct.fromcountry == country){
            gstPrice = 0
          }
          else
          {
            if (objProduct.variants[0].frieghtrate.length == undefined) {
              gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
            }
            else {
              gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
            }
        }
        }

        }
        else {
          if (objProduct.variants[0].overrideprice == 0) {
            if (objProduct.variants[0].frieghtrate.length == undefined) {
              gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
            }
            else {
              gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].price + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
            }

          }
          else
          {
            if((objProduct.variants[0].isoverdcalculated == 0 && objProduct.variants[0].overrideprice > 0) && objProduct.fromcountry == country){
              gstPrice = 0
            }
            else
            {
              if (objProduct.variants[0].frieghtrate.length == undefined) {
                gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate)) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
              }
              else {
                gstPrice = Math.floor(((objProduct.variants[0].conversionrate * ((objProduct.variants[0].overrideprice + objProduct.variants[0].pwfee) * (1 + (objProduct.variants[0].purchasetax / 100))) + (objProduct.variants[0].frieghtrate[0])) * (1 + objProduct.variants[0].duty)) * (1 / (1 - ((objProduct.variants[0].fees / (1 + (objProduct.variants[0].fees))) + (objProduct.variants[0].margin / (1 + (objProduct.variants[0].margin)))))) * objProduct.variants[0].taxes, 0)
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


  const withDiscount = (objProduct) => {

    var totalPrice = withTax(objProduct);
    var finalPrice = 0;

    if ((objProduct.variants[0].isoverdcalculated == 0 && objProduct.variants[0].overrideprice > 0) && objProduct.fromcountry == country) {
      finalPrice = totalPrice;
    }
    else
    {
      if (totalPrice > 0 ) {
        var discount = discountCalculation(objProduct);
        finalPrice = (totalPrice * (1 - discount / 100)).toFixed(2);
      }
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


  const withDiscountWithQty = (objProduct, qty) => {

    try {
      var finalPrice = 0;
      var totalPrice = withTax(objProduct);
      if (totalPrice > 0) {
        var discount = discountCalculation(objProduct);
        finalPrice = parseFloat(((totalPrice * (1 - discount / 100)) * qty).toFixed(2));
      }
    }
    catch (ex) {
      console.log(ex);
    }


    return finalPrice;
  }

  const withTax = (objProduct) => {

    var totalPrice = 0;
    var sellprice = priceCollection(objProduct);
    var tax = 0;

    if ((objProduct.variants[0].isoverdcalculated == 0 && objProduct.variants[0].overrideprice > 0) && objProduct.fromcountry == country) {
      tax = 0;
    }
    else
    {
      tax = gstCollection(objProduct);
    }
    
    if (sellprice) {
      totalPrice = (sellprice + tax).toFixed(2);
    }

    return totalPrice;
  }


  const discountCalculation = (objProduct) => {
    var discount = null;
    // CommonFun.publicMethod();
    if (objProduct != null && objProduct != undefined) {
      if (objProduct.length > 0) {
        discount = objProduct.variants[0].discount;
      }
      else {
        discount = 0;
      }
    }
    return discount
  }

  // Update Product Quantity
  const updateQty = (item, quantity) => {

    if (withDiscount(item) > 0) {
      if (quantity >= 1) {
        if (quantity <= item.variants[0].quantity) {
          const index = cartItems.findIndex(itm => itm.id === item.id)
          if (index !== -1) {
            const product = cartItems[index];
            setCartItems([{ ...product, ...item, qty: quantity, total: (withDiscount(item)) * quantity }])
            // toast.info("Product Quantity Updated !");
          } else {
            const product = { ...item, qty: quantity, total: (withDiscount(item)) * quantity }
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
