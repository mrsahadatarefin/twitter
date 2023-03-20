import {create} from 'zustand';
interface LoginModalStare{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;

}
const useLoginModal = create<LoginModalStare>((set)=>({

isOpen:false,
onOpen:()=>set({isOpen:true}),
onClose:()=> set({isOpen:false}),

}));
export default useLoginModal;

