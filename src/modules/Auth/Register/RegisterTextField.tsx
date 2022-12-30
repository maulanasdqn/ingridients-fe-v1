import { FC, ReactElement, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { AuthPayload } from "@store/Auth/Common/atoms";
import TextField from "@components/Common/TextField";

const RegisterTextField: FC = (): ReactElement => {
  const [payload, setPayload] = useRecoilState(AuthPayload);

  const className =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const InputFields = [
    {
      type: "text",
      label: "Fullname",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "name",
      id: "fullname",
      className,
      placeholder: "Maulana Sodiqin",
      required: true,
      value: payload["name"],
    },

    {
      type: "email",
      label: "Email",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "email",
      id: "email",
      className,
      placeholder: "maulana@psu.org",
      required: true,
      value: payload["email"],
    },

    {
      type: "password",
      label: "Password",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "password",
      id: "password",
      className,
      placeholder: "*************",
      required: true,
      value: payload["password"],
    },
    {
      type: "password",
      label: "Confirm Password",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      name: "confirm_password",
      id: "password",
      className,
      placeholder: "*************",
      required: true,
      value: payload["confirm_password"],
    },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };

  return (
    <>
      {InputFields.map((field, index) => (
        <TextField {...field} key={index} onChange={onChange} />
      ))}
    </>
  );
};

export default RegisterTextField;
