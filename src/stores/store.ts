import {create} from 'zustand';

type AddressStore = {
    address: string;
    geo: string;
    setAddress: (address: string) => void;
}

export const useAddressStore = create<AddressStore>()((set)=>({
    address: '',
    geo: '0.0.0.0.0',
    setAddress: (address: string) => set({address}),
}));