'use client';

import useBearStore from '@/stores/useBearStore';

const BearButton = () => {
  const increaseBear = useBearStore(state => state.increasePopulation);

  return (
    <button onClick={increaseBear} className="flex-1">
      🐻 +
    </button>
  );
};

export default BearButton;
