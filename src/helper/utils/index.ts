import { RcFile } from "antd/es/upload";
import { APP_BASE_URL } from "../constants/config";
import { message } from "antd";
import moment from "jalali-moment";
import "moment/locale/fa";
import "jalali-moment";

export const isLoggedIn: () => boolean = () => {
  const userKey: null | string = localStorage.getItem("user");

  const isLoggedIn = userKey && JSON.parse(userKey);

  return !!isLoggedIn;
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

export const getImageUrl = (url: string | undefined) => {
  if (!url) return "";

  const startPoint = url.indexOf("./");

  return APP_BASE_URL + url.substring(startPoint + 1);
};

export const getFormatNumber = (number: any) => {
  if (!number) return "";
  const string: any = number.toLocaleString("fa-IR"); // ۱۲٬۳۴۵٫۶۷۹
  number = number.replace(/٬/g, ",‬");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return string;
};

export const commaSeparator = (num: number | string): string | number => {
  if (num) {
    const x: string[] = num.toString().split(".");
    const result = x?.length
      ? x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : x.join();
    if (x[1]) return `${result}.${x[1]}`;
    return result;
  }
  return num;
};

export function separate(INumber: any) {
  if (!INumber) return "";

  let x, y, z;
  INumber += "";
  INumber = INumber.replace(",", "");
  // eslint-disable-next-line prefer-const
  x = INumber.split(".");
  y = x[0];
  // eslint-disable-next-line prefer-const
  z = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");

  return y + z;
}

export const ValidateNationalCode = (nationalCode: string) => {
  if (!/^\d{10}$/.test(nationalCode)) return false;
  const check = +nationalCode[9];
  const sum =
    nationalCode
      .split("")
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return /^[09].[0-9]{9}$/.test(phoneNumber);
};

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type == "application/pdf";
  if (!isJpgOrPng) {
    message.error(" فقط فایل های  JPG/PNG");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("سایز بیشتر 2مگابایت نباشد");
  }
  return isJpgOrPng && isLt2M;
};

export function formatDate(date: any) {
  if (!date) return "";

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  const day = ("0" + newDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

export function miladyToShams(date: string) {
  if (!date) return;

  const result = moment(date, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");

  return result;
}

export const convertToSolarDate = (date: Date | string) => {
  if (!date) return "";

  const res = new Date(date)
    ?.toLocaleDateString("fa-IR")
    ?.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"?.indexOf(d)?.toString());

  return res;
};

export function toShamsi(date: string) {
  if (!date) return;

  const shamsiDate = moment(date, "YYYY-MM-DD").format(
    "jalaliYYYY/jalaliMM/jalaliDD"
  );
  return shamsiDate;
}
