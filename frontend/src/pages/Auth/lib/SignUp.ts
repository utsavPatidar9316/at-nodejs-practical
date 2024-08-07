import axiosInstance from "../../../axiosInstance";
import { signInForm, signUpForm } from "../../../types/auth";

export const signUp = async (formData: signUpForm) => {
  const { confirmPassword, ...rest } = formData;
  const res = await axiosInstance.post("user/create", { ...rest });
  return res.data;
};

export const signIn = async (formData: signInForm) => {
  const res = await axiosInstance.post("user/login", formData);
  return res.data;
};

export const getOne = async (id: string) => {
  const res = await axiosInstance.get(`user/get/${id}`);
  return res.data;
};

export const updateOne = async (id: string, password: string) => {
  const res = await axiosInstance.put(`user/update/${id}`, { password });
  return res.data;
};
