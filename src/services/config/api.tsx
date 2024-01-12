import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";

import { APP_BASE_URL } from "../../helper/constants/config";

//_________Config axios instance ___________

const config: AxiosRequestConfig<any> = {
  baseURL: APP_BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzdhZWIwYzUwZjU1NjllZDBjZTAwNDU1MTc4ZmJkODI1ZGMxN2U3OTlhOWIxZjAyOTExZTA0MzBhYzU0MDdjMjUxOTNiYTRiM2RkNTljNjYiLCJpYXQiOjE3MDM2NTMxMzQuNDM5NTc4LCJuYmYiOjE3MDM2NTMxMzQuNDM5NTgzLCJleHAiOjE3MDM2OTYzMzQuNDM0MzQ2LCJzdWIiOiIxMiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItYWRkcmVzc2VzIiwidmlldy11c2VyLWNvbnRyYWN0cyIsImVkaXQtdXNlci1jb250YWN0LWluZm8iLCJ2aWV3LXVzZXItZG9jdW1lbnRzIiwidmlldy11c2VyLWRldmljZXMiLCJ2aWV3LXNwZWNpZmljLXVzZXItZG9jdW1lbnQiLCJhY2NlcHQtcmVqZWN0LXVzZXItZG9jdW1lbnQiLCJ2aWV3LXVzZXItbGlzdCIsInZpZXctc3BlY2lmaWMtdXNlciIsImNyZWF0ZS11c2VyIiwiZWRpdC11c2VyIiwiZGVsZXRlLXVzZXIiLCJlZGl0LXByb2ZpbGUiLCJlZGl0LWNvbnRhY3QtaW5mbyIsInZpZXctcm9sZS1saXN0Iiwidmlldy1yb2xlIiwiY3JlYXRlLXJvbGUiLCJlZGl0LXJvbGUiLCJkZWxldGUtcm9sZSIsInZpZXctYWRkcmVzcy1saXN0IiwiY3JlYXRlLWFkZHJlc3MiLCJ2aWV3LWFkZHJlc3MiLCJlZGl0LWFkZHJlc3MiLCJkZWxldGUtYWRkcmVzcyIsInZpZXctY29udHJhY3QtbGlzdCIsImNyZWF0ZS1jb250cmFjdCIsInZpZXctY29udHJhY3QiLCJlZGl0LWNvbnRyYWN0IiwiZGVsZXRlLWNvbnRyYWN0Iiwidmlldy1wZXJtaXNzaW9uLWxpc3QiLCJjcmVhdGUtcGVybWlzc2lvbiIsImVkaXQtcGVybWlzc2lvbiIsImRlbGV0ZS1wZXJtaXNzaW9uIiwidmlldy1kb2N1bWVudC1saXN0Iiwidmlldy1kb2N1bWVudCIsImNyZWF0ZS1kb2N1bWVudCIsImludml0ZS11c2VyIiwidmlldy1kb2N1bWVudC10eXBlLWxpc3QiLCJ2aWV3LWRvY3VtZW50LXR5cGUiLCJjcmVhdGUtZG9jdW1lbnQtdHlwZSIsImVkaXQtZG9jdW1lbnQtdHlwZSIsImRlbGV0ZS1kb2N1bWVudC10eXBlIiwidmlldy1tZW1iZXItbGlzdCIsInZpZXctdXNlci1pbnZpdGVkLWxpc3QiLCJpc3N1aW5nLWJpbGwiLCJtYW5hZ2UtYmlsbCIsInZpZXctZmluYW5jaWFsLWRhdGEiXX0.kVHVG8UkV0EKOEuieJl_U0I28VJHWvWFHqxfs8t0gz2cRn_s0I5lhcXIPxG9BMbllUgEqsfAiS5FaFk64ElhRHTc9GBkf3cRy5ow-f2Rmy2eOxWhSjZ3TKxI4fJOiOOpkn8DmDrkQDzpAf19BOvxzHna6SY4n4saUJcRdpabvi5UmgGVmyN6Nrj9JZVi8DqZyyxAL0dnu_klpbj2h5fA8dMY9CFGFt9Cnkleh4Fp7cpdyLKqT7Y6CpSghBZwDu4bN6fV9HAgq1IPGK4IXh9urbVf4EK3FxV4QSvo7uxxLO4SC2j9iYWdRtGlCjVZUihx_5kchVLjasVEGpC1prITxUt9NEf9WK0eyl3rQRIeftegS7tbN_g8fZKzKbhTWMrZKHCPjr8a7zPqf3gFAC0IdG_K4DuR-qup-jciFm4kqwoQFZ3C2Iu7wVkajdcH3hGqQKYwvDkgKERhIJSzE1zK-xvGqU6A_GPWGXy6l9qb0yQzCS3rLCaa7xYLBU-wtuh2DfLTtLx_plGZ_LBXgHDTKLgf87bIiNcOHinlI-gCyLc0SXcMwkkGfVpvW6xGAPsT9Ckj-Z0PjvcGHHaH6XaU0JhaJTcr4Yy780ebg9pSaoo9IAj8Qlai3q4SqZNj3RmNRRJoBaKsV-Kobne6wKghE_nEDipe-C3MV6WccqQpzT8",
  },
};

const API = axios.create(config);
// const { get, post, put, delete: remove } = API;

export const setHeaderAPI = () => {
  // const userKey: null | string = localStorage.getItem("user");

  // const user = userKey && JSON.parse(userKey);
  // const updateToken = user?.accessToken;
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzdhZWIwYzUwZjU1NjllZDBjZTAwNDU1MTc4ZmJkODI1ZGMxN2U3OTlhOWIxZjAyOTExZTA0MzBhYzU0MDdjMjUxOTNiYTRiM2RkNTljNjYiLCJpYXQiOjE3MDM2NTMxMzQuNDM5NTc4LCJuYmYiOjE3MDM2NTMxMzQuNDM5NTgzLCJleHAiOjE3MDM2OTYzMzQuNDM0MzQ2LCJzdWIiOiIxMiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItYWRkcmVzc2VzIiwidmlldy11c2VyLWNvbnRyYWN0cyIsImVkaXQtdXNlci1jb250YWN0LWluZm8iLCJ2aWV3LXVzZXItZG9jdW1lbnRzIiwidmlldy11c2VyLWRldmljZXMiLCJ2aWV3LXNwZWNpZmljLXVzZXItZG9jdW1lbnQiLCJhY2NlcHQtcmVqZWN0LXVzZXItZG9jdW1lbnQiLCJ2aWV3LXVzZXItbGlzdCIsInZpZXctc3BlY2lmaWMtdXNlciIsImNyZWF0ZS11c2VyIiwiZWRpdC11c2VyIiwiZGVsZXRlLXVzZXIiLCJlZGl0LXByb2ZpbGUiLCJlZGl0LWNvbnRhY3QtaW5mbyIsInZpZXctcm9sZS1saXN0Iiwidmlldy1yb2xlIiwiY3JlYXRlLXJvbGUiLCJlZGl0LXJvbGUiLCJkZWxldGUtcm9sZSIsInZpZXctYWRkcmVzcy1saXN0IiwiY3JlYXRlLWFkZHJlc3MiLCJ2aWV3LWFkZHJlc3MiLCJlZGl0LWFkZHJlc3MiLCJkZWxldGUtYWRkcmVzcyIsInZpZXctY29udHJhY3QtbGlzdCIsImNyZWF0ZS1jb250cmFjdCIsInZpZXctY29udHJhY3QiLCJlZGl0LWNvbnRyYWN0IiwiZGVsZXRlLWNvbnRyYWN0Iiwidmlldy1wZXJtaXNzaW9uLWxpc3QiLCJjcmVhdGUtcGVybWlzc2lvbiIsImVkaXQtcGVybWlzc2lvbiIsImRlbGV0ZS1wZXJtaXNzaW9uIiwidmlldy1kb2N1bWVudC1saXN0Iiwidmlldy1kb2N1bWVudCIsImNyZWF0ZS1kb2N1bWVudCIsImludml0ZS11c2VyIiwidmlldy1kb2N1bWVudC10eXBlLWxpc3QiLCJ2aWV3LWRvY3VtZW50LXR5cGUiLCJjcmVhdGUtZG9jdW1lbnQtdHlwZSIsImVkaXQtZG9jdW1lbnQtdHlwZSIsImRlbGV0ZS1kb2N1bWVudC10eXBlIiwidmlldy1tZW1iZXItbGlzdCIsInZpZXctdXNlci1pbnZpdGVkLWxpc3QiLCJpc3N1aW5nLWJpbGwiLCJtYW5hZ2UtYmlsbCIsInZpZXctZmluYW5jaWFsLWRhdGEiXX0.kVHVG8UkV0EKOEuieJl_U0I28VJHWvWFHqxfs8t0gz2cRn_s0I5lhcXIPxG9BMbllUgEqsfAiS5FaFk64ElhRHTc9GBkf3cRy5ow-f2Rmy2eOxWhSjZ3TKxI4fJOiOOpkn8DmDrkQDzpAf19BOvxzHna6SY4n4saUJcRdpabvi5UmgGVmyN6Nrj9JZVi8DqZyyxAL0dnu_klpbj2h5fA8dMY9CFGFt9Cnkleh4Fp7cpdyLKqT7Y6CpSghBZwDu4bN6fV9HAgq1IPGK4IXh9urbVf4EK3FxV4QSvo7uxxLO4SC2j9iYWdRtGlCjVZUihx_5kchVLjasVEGpC1prITxUt9NEf9WK0eyl3rQRIeftegS7tbN_g8fZKzKbhTWMrZKHCPjr8a7zPqf3gFAC0IdG_K4DuR-qup-jciFm4kqwoQFZ3C2Iu7wVkajdcH3hGqQKYwvDkgKERhIJSzE1zK-xvGqU6A_GPWGXy6l9qb0yQzCS3rLCaa7xYLBU-wtuh2DfLTtLx_plGZ_LBXgHDTKLgf87bIiNcOHinlI-gCyLc0SXcMwkkGfVpvW6xGAPsT9Ckj-Z0PjvcGHHaH6XaU0JhaJTcr4Yy780ebg9pSaoo9IAj8Qlai3q4SqZNj3RmNRRJoBaKsV-Kobne6wKghE_nEDipe-C3MV6WccqQpzT8";
};

const post = (url: string, data: any) =>
  API.post(url, data, {
    headers: {
      authorization: `Bearer ${setHeaderAPI()}`,
      "Content-Language": "fa",
    },
  });

const get = (url: string) =>
  API.get(url, {
    headers: {
      authorization: `Bearer ${setHeaderAPI()}`,
      apikey: "asa65asd418914d65aas",
      "Content-Language": "fa",
    },
  });

const remove = (url: string) =>
  API.delete(url, {
    headers: {
      authorization: `Bearer ${setHeaderAPI()}`,
      "Content-Language": "fa",
    },
  });

const patch = (url: string, data: any) =>
  API.patch(url, data, {
    headers: {
      authorization: `Bearer ${setHeaderAPI()}`,
      "Content-Language": "fa",
    },
  });

const put = (url: string, data: any) => {
  return API.put(url, data, {
    headers: {
      authorization: `Bearer ${setHeaderAPI()}`,
      "Content-Language": "fa",
    },
  });
};

export type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
};

export { get, post, remove, put, patch };
export default API;
