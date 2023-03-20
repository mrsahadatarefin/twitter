import { useCallback, useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = ()=>{
const loginModal = useLoginModal(); 
const registerModal =useRegisterModal() 
const [email,setEmail]=useState('');
const [password,setPassword]=useState('')
const [isLoading,setLoading]=useState(false)
const onToggle = useCallback(()=>{
    if(isLoading){
    return;
    
    }
    registerModal.onOpen()
    loginModal.onClose()
    
    
    },[isLoading,registerModal,loginModal])
const onSubmit = useCallback(async ()=>{
    try{
setLoading(true)
loginModal.onClose();
    }
    catch (error){
        console.log(error)
    }
    finally{
      setLoading(false)  
    }
},[loginModal])

const bodyContent = (
    <div className="flex flex-col gap-4">
<Input
placeholder="password"
onChange={(e)=>setEmail(e.target.value)}
value={email}
disabled={isLoading}

/>
<Input
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
value={password}
disabled={isLoading}

/>

    </div>
)
const footerContent = (
    <div className=" text-neutral-400 text-center mt-4">
  
      <p> first time using twitter
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
        create an account?
          </span>  
      </p>
    </div>  
  )

return(
   <Modal
   disabled={isLoading}
   isOpen={loginModal.isOpen}
   title='Login'
   actionLabel="sing in"
onClose={loginModal.onClose}  
onSubmit={onSubmit}
body={bodyContent}
footer={footerContent}
   />
)

}
export default LoginModal;