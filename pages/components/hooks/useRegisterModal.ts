import {create} from 'zustand';
interface RegisterModalStare{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;

}
const useRegisterModal = create<RegisterModalStare>((set)=>({

isOpen:false,
onOpen:()=>set({isOpen:true}),
onClose:()=> set({isOpen:false}),

}));
export default useRegisterModal;

