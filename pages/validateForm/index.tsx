import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "../../components/inputField/InputField";

interface registerFormInputs {
  username: string,
  email: string,
  password: string,
  retypePassword: string
};

export default function ValidateForm() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<registerFormInputs>({ mode: "onBlur" });

  function onSubmit(formData: registerFormInputs) {
    console.log('formData-----', formData);
  }

  return (
    <form name="registerUser" onSubmit={handleSubmit(onSubmit)} className="w-1/4 p-4 my-0 mx-auto text-center">
      {/* className, placeholder, name, type, inputName, ...rest */}
      <InputField
        classNames="block w-full border border-black mb-2 pl-2"
        placeholder="Username"
        name="username"
        type="text"
        errors={errors}
        {...register("username", { required: true, minLength: 6 })}
      />
      {/* <input
        {...register("username", { required: true, minLength: 6 })}
        className="block w-full border border-black mb-2 pl-2"
        placeholder="Username"
        name="username"
        type="text"
      />
      {
        errors.username && errors.username.type === 'required' && (
        <div className="text-red-700">Username is required</div>
      )}
      {
        errors.username && errors.username.type === 'minLength' && (
        <div className="text-red-700">Username should have minimum 6 characters</div>
      )} */}
      <input
        {...register("email", { required: true, minLength: 6 })}
        className="block w-full border border-black mb-2 pl-2"
        placeholder="Email"
        name="email"
        type="text"
      />
      {
        errors.email && errors.email.type === 'required' && (
        <div className="text-red-700">Email is required</div>
      )}
      {
        errors.email && errors.email.type === 'minLength' && (
        <div className="text-red-700">Email should have minimum 6 characters</div>
      )}
      <input
        {...register("password", { required: true, minLength: 6 })}
        className="block w-full border border-black mb-2 pl-2"
        placeholder="Password" name="password" type="password"
      />
      {
        errors.password && errors.password.type === 'required' && (
        <div className="text-red-700">Password is required</div>
      )}
      {
        errors.password && errors.password.type === 'minLength' && (
        <div className="text-red-700">Password should have minimum 6 characters</div>
      )}
      <input
        {...register("retypePassword", { required: true, validate: (value) => value === getValues("password") })}
        className="block w-full border border-black mb-2 pl-2"
        placeholder="Retype password"
        name="retypePassword"
        type="password"
      />
      {
        errors.retypePassword && errors.retypePassword.type === 'validate' && (
        <div className="text-red-700">Passwords don&apos;t match</div>
      )}
      <Link href="/"><button type="button" className="inline-block px-4 py-2 text-white bg-gray-700 mr-4">Back</button></Link>
      <button type="submit" className="inline-block px-4 py-2 text-white bg-sky-500">Register</button>
    </form>
  )
}