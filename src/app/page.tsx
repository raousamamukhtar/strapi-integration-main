import StripeCheckOutButton from "./Checkout";
export default function Home() {
  // const a = "avqvsg";
  // const stt = "";
  // if (!!stt) {
  //   console.log("Str value");
  // }
  // if (!a) {
  //   console.log("Null value");
  // }
  return (
    <main className="flex gap-3 w-full justify-center py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
      <div>Stripe Check Out</div>
      <StripeCheckOutButton />
    </main>
  );
}
