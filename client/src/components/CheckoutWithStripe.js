// import { useEffect } from "react"
// import StripeCheckout from "react-stripe-checkout"
// // import { loadStripe } from "@stripe/stripe-js"
// import "@stripe/stripe-js"

// function CheckoutWithStripe() {
//   //   function checkOut() {
//   //     fetch("/checkouts", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         currency: "usd",
//   //       }).then((r) => r.json()),
//   //     })
//   //   }

//   //   const stripe = Stripe(process.env.REACT_APP_STRIPE_PK_KEY)

//   //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PK_KEY);
//   return (
//     <>
//       <div>
//         <StripeCheckout
//           amount="20.00"
//           name="Book Tour"
//           // functions defined above can be used to add more information while making the API call.
//           // description={`Order of ${computeQuantity(cart)} items!`}
//           image="LINKTOIMAGE"
//           apiKey={process.env.REACT_APP_STRIPE_PK_KEY}
//           currency="usd"
//         />
//       </div>
//     </>
//   )
// }

// export default CheckoutWithStripe
