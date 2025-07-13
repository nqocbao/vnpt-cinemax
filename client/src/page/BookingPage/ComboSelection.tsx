import React from "react";

interface Combo {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
}

interface ComboSelectionProps {
  COMBOS: Combo[];
  comboCounts: { [id: number]: number };
  handleChangeCombo: (id: number, delta: number) => void;
}

const ComboSelection: React.FC<ComboSelectionProps> = ({
  COMBOS,
  comboCounts,
  handleChangeCombo,
}) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Chọn Combo / Sản phẩm</h2>
      {COMBOS.map((combo) => (
        <div key={combo.id} className="flex items-center border-b py-4">
          <img
            src={combo.img}
            alt={combo.name}
            className="w-24 h-24 object-contain rounded mr-4"
          />
          <div className="flex-1">
            <div className="font-bold">{combo.name}</div>
            <div className="text-gray-600 text-sm mb-1">{combo.desc}</div>
            <div className="font-bold text-base text-[#F1B4BB]">
              Giá: {combo.price.toLocaleString()} đ
            </div>
          </div>
          <div className="flex items-center ml-4">
            <button
              className="w-8 h-8 border rounded text-xl"
              onClick={() => handleChangeCombo(combo.id, -1)}
            >
              -
            </button>
            <span className="mx-3 w-6 text-center">
              {comboCounts[combo.id] || 0}
            </span>
            <button
              className="w-8 h-8 border rounded text-xl"
              onClick={() => handleChangeCombo(combo.id, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComboSelection;
