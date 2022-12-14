import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/client";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend (our own backend) to create a checkout session...

    const checkoutSession = await await axios.post(
      "/api/create-checkout-session",
      {
        items,
        email: session[0].user.email,
      }
    );

    // redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/dyz"
            width={1020}
            height={250}
            objetcFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "No Items Selected From Kam's Store."
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                SUBTOTAL ({items.length} items) :
                <span className="font-bold ml-2">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session[0]}
                onClick={createCheckoutSession}
                role="link"
                className={`button mt-2 ${
                  !session[0] &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session[0] ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
