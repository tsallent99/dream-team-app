import { StoreApi, createStore as createZustandStore } from "zustand";

export { type StoreApi };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isStoreApi = <T>(value: any): value is StoreApi<T> => {
  return (
    value &&
    typeof value.getState === "function" &&
    typeof value.setState === "function"
  );
};

export const createDummyStore = <T>(value: T): StoreApi<T> => ({
  getState: () => value,
  setState: () => {},
  getInitialState: () => value,
  subscribe: () => () => {},
  destroy: () => {},
});

export const createStore = createZustandStore;

