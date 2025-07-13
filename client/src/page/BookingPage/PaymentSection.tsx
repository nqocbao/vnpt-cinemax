import React from "react";

interface PaymentMethod {
  id: string;
  label: string;
  logo: string;
}

interface PaymentSectionProps {
  promoCode: string;
  setPromoCode: (code: string) => void;
  PAYMENT_METHODS: PaymentMethod[];
  selectedPayment: string;
  setSelectedPayment: (id: string) => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  promoCode,
  setPromoCode,
  PAYMENT_METHODS,
  selectedPayment,
  setSelectedPayment,
}) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Khuyến mãi</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="Mã khuyến mãi"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button className="bg-[#F1B4BB] text-white px-6 py-2 rounded font-semibold">
          Áp Dụng
        </button>
      </div>
      <div className="text-xs text-gray-500 mb-4">
        Lưu ý: Có thể áp dụng nhiều vouchers vào 1 lần thanh toán
      </div>
      <div className="bg-white rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>
        <div className="flex flex-col gap-3">
          {PAYMENT_METHODS.map((pm) => (
            <label
              key={pm.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="payment"
                checked={selectedPayment === pm.id}
                onChange={() => setSelectedPayment(pm.id)}
                className="accent-[#F1B4BB] w-5 h-5"
              />
              <img
                src={pm.logo}
                alt={pm.id}
                className="w-8 h-8 object-contain"
              />
              <span className="text-base">{pm.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
