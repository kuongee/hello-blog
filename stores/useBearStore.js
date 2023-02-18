import { create } from 'zustand';

const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  resetPopulation: () => set(state => ({ bears: 0 })),
}));

export default useBearStore;