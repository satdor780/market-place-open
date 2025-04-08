import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FC } from 'react';

export const Quantity: FC<{
  quantity: number;
  addQuantity: () => void;
  changeQuantity: (value: number) => void;
  removeQuantity: () => void;
  classNames?: string;
}> = ({ quantity, removeQuantity, changeQuantity, addQuantity, classNames }) => {
  return (
    <div
      className={`${classNames} rounded-lg bg-white p-1 h-9 w-32 flex items-center justify-center border border-gray-200 shadow-sm`}
    >
      <button
        onClick={() => addQuantity()}
        className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e: ChangeEvent<HTMLInputElement>) => changeQuantity(Number(e.target.value))}
        className="w-12 mx-2 text-center bg-transparent border-none focus:outline-none"
      />
      <button
        onClick={() => removeQuantity()}
        className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};
