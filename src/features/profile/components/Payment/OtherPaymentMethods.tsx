import { paymentMethods } from "../../data/paymentMethods";
import PaymentMethodCard from "./PaymentMethodCard";

const OtherPaymentMethods = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-[#111827]">
        Other Payment Methods
      </h2>

      <div className="flex flex-col gap-2.5">
        {paymentMethods.map((method) => (
          <PaymentMethodCard
            key={method.id}
            method={method}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherPaymentMethods;