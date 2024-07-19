"use client"

import SocialMediaIcon from "../buttons/SocialMediaIcon"
import { FcGoogle } from "react-icons/fc";
import Input from "../inputs/Input"
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginModalFunc, registerModalFunc } from "@/app/redux/modalSlice";

const LoginModal = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const { loginModal } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()

  const redirectFunc = ()=>{
    dispatch(loginModalFunc())
    dispatch(registerModalFunc())
  }


  const bodyElement = (
    <div>
      <Input
        id="email"
        type="email"
        placeholder="Emailiniz"
        labelTitle="Emailiniz"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        placeholder="Şifreniz"
        labelTitle="Şifreniz"
        register={register}
        errors={errors}
        required
      />
    </div>
  )


  const footerElement = (
    <div className="flex flex-col items-center mt-3">
      <div>Ya da</div>
      <SocialMediaIcon
        icon={FcGoogle}
        btnTitle="Google"
        onSubmit={() => { }}
      />

      <div className="">
        <small>Hesabınız yok mu?</small>
        <a onClick={redirectFunc} className="cursor-pointer text-sm mx-1 text-black font-bold hover:border-b border-black transition-all">Kayıt Ol</a>
      </div>
    </div>

  )

  return (
    <div>
      <Modal footerElement={footerElement} bodyElement={bodyElement} isOpen={loginModal} onSubmit={handleSubmit(onSubmit)} onClose={() => { dispatch(loginModalFunc()) }} btnLabel="Giriş Yap" title="GİRİŞ YAP" />
    </div>
  )
}

export default LoginModal