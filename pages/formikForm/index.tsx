import Link from 'next/link';
import { Formik, Field, Form } from 'formik';

interface registerFormInputs {
  username: string,
  email: string,
  password: string,
  retypePassword: string
};

export default function FormikForm() {

  function handleSubmit(formData: any) {
    console.log('formData-----', formData);
  }


  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          retypePassword: ''
        }}
        onSubmit={handleSubmit}
      >
        <Form className="w-1/4 p-4 my-0 mx-auto text-center">
          <Field name="username" placeholder="Username" className="block w-full border border-black mb-2 pl-2" />
          <Field name="email" placeholder="Email" type="email" className="block w-full border border-black mb-2 pl-2" />
          <Field name="password" placeholder="Password" type="password" className="block w-full border border-black mb-2 pl-2" />
          <Field name="retypePassword" placeholder="Retype password" type="password" className="block w-full border border-black mb-2 pl-2" />
          <Link href="/">
            <button type="button" className="inline-block px-4 py-2 text-white bg-gray-700 mr-4">Back</button>
          </Link>
          <button type="submit" className="inline-block px-4 py-2 text-white bg-sky-500">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
