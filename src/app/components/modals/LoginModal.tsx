"use client"

import SocialMediaIcon from "../buttons/SocialMediaIcon"
import { FcGoogle } from "react-icons/fc";
import Input from "../inputs/Input"
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginModalFunc, registerModalFunc } from "@/app/redux/modalSlice";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react"


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
  const { loginModal } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  const router = useRouter()

  const redirectFunc = () => {
    dispatch(loginModalFunc())
    dispatch(registerModalFunc())
  }

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {


    const result = await signIn('credentials', {
      ...data,
      redirect: false
    });

    if (result?.ok) {
      dispatch(loginModalFunc())
      router.refresh()
      toast.success("Giriş İşlemi Başarılı!!")
    } else {
      toast.error("Giriş yapılamadı!!")
    }


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
        onSubmit={() => { signIn('google', { callbackUrl }) }}

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