import Link from "next/link";
import { useState } from "react";

export default function TestForm() {

  const [formValues, setFormValues ]  = useState({
    username: '',
    email: '',
    password: '',
    retypePassword: ''
  });

  function handleChange(evt) {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    });
  }
  
  function handleSubmit() {
    console.log('form submit action', formValues);
    
  }

  return (
    <form name="registerUser" onSubmit={handleSubmit} className="w-1/4 p-4 my-0 mx-auto text-center">
      <input className="block w-full border border-black mb-2 pl-2" placeholder="Username" name="username" type="text" onChange={handleChange} value={formValues.username} />
      <input className="block w-full border border-black mb-2 pl-2" placeholder="Email" name="email" type="text" onChange={handleChange} value={formValues.email} />
      <input className="block w-full border border-black mb-2 pl-2" placeholder="Password" name="password" type="password" onChange={handleChange} value={formValues.password} />
      <input className="block w-full border border-black mb-2 pl-2" placeholder="Retype password" name="retypePassword" type="password" onChange={handleChange} value={formValues.retypePassword} />
      <Link href="/"><button type="button" className="inline-block px-4 py-2 text-white bg-gray-700 mr-4">Back</button></Link>
      <button type="submit" className="inline-block px-4 py-2 text-white bg-sky-500" onClick={handleSubmit}>Register</button>
    </form>
  )
}