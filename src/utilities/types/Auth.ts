import { ChangeEventHandler } from "react";

export type AuthPayloadTypes = {
  email: string;
  password: string;
  fullname?: string;
};

export type AuthCheckBoxType = {
  label: string;
  subLabel: string;
  value: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type AuthFooterType = {
  label: string;
  subLabel: string;
  buttonLabel: string;
  url: string;
};
