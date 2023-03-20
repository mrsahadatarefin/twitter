import { useCallback, useState } from "react";
import useLoginModal from "../hooks/useLoginModal";

import useRegisterModal from "../hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";


const RegisterModal = ()=>{
const registerModal = useRegisterModal();
const loginModal = useLoginModal()
const [name,setName]=useState('')
const [email,setEmail]=useState('');
const [password,setPassword]=useState('')
const [username,setUsername]=useState('')
const [isLoading,setLoading]=useState(false)
const onToggle = useCallback(()=>{
if(isLoading){
return;

}
registerModal.onClose()
loginModal.onOpen()


},[isLoading,registerModal,loginModal])
const onSubmit = useCallback(async ()=>{
    try{
setLoading(true)
registerModal.onClose();
    }
    catch (error){
        console.log(error)
    }
    finally{
      setLoading(false)  
    }
},[registerModal])

const bodyContent = (
    <div className="flex flex-col gap-4">
<Input
placeholder="name"
onChange={(e)=>setName(e.target.value)}
value={name}
disabled={isLoading}

/>
<Input
placeholder="user name"
onChange={(e)=>setUsername(e.target.value)}
value={username}
disabled={isLoading}

/>
<Input
placeholder="email"
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

    <p>already have an account? 
      <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
        Sign in
        </span>  
    </p>
  </div>  
)

return(
   <Modal
   disabled={isLoading}
   isOpen={registerModal.isOpen}
   title='Create an account'
   actionLabel="Register"
onClose={registerModal.onClose}  
onSubmit={onSubmit}
body={bodyContent}
footer={footerContent}
   />
)

}
export default RegisterModal;