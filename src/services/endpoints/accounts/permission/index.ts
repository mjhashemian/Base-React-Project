import { get, post, remove, put } from "../../../config";

export const getPermissions = (pageParams?: string) =>
  get(`accounts/permission?${pageParams ? pageParams : ""}`);

export const addPermission = (formData?: any) =>
  post(`accounts/permission`, formData);

export const updatePermission = (formData?: any) =>
  put(`accounts/permission`, formData);

export const removePermission = (id?: number) =>
  remove(`accounts/permission/${id}`);
