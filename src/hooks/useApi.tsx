import { useState } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const apiURl = "https://mnvst2hc-4000.use2.devtunnels.ms/api/";
interface IHeaderPropsAPI {
  "access-token": string | undefined;
  "Content-Type": string | undefined;
}

interface IRequestProp extends AxiosRequestConfig {
  headers: IHeaderPropsAPI | any;
}

interface ILoadApiProps {
  endpoint: string;
  token?: boolean;
  type: Method;
  body?: any;
  file?: boolean;
}

const setLocal = async (value: string, key: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getLocal = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
  }
};

const removeLocal = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    // error reading value
  }
};

export const useApi = () => {
  const [loadingApi, setLoading] = useState<string[]>([]);
  const [loadedApi, setLoadedApi] = useState<string[]>([]);
  const [errorApi, setErrorApi] = useState<string>("");

  let loggedApi;
  AsyncStorage.getItem("user").then((user) => (loggedApi = Boolean(user)));

  function setError(error: string) {
    setErrorApi(error);
  }

  const loadApi = async ({
    type = "GET",
    endpoint,
    token,
    body,
    file,
  }: ILoadApiProps) => {
    setErrorApi("");
    setLoading([...loadingApi, `${type}__${endpoint}`]);
    setLoadedApi((prevState) =>
      prevState.filter((item) => item !== `${type}__${endpoint}`)
    );

    try {
      let headers: IHeaderPropsAPI = {
        "access-token": undefined,
        "Content-Type": undefined,
      };

      if (token) {
        let token2: any =  await AsyncStorage.getItem("token");
        
        if (!token2) {
          setError("No has iniciado sesión.");
          console.error("Token no encontrado en las cookie");
          throw new Error("Token no encontrado en las cookie.");
        }
        headers["access-token"] = token2;
        if (file) {
          headers["Content-Type"] = "multipart/form-data";
        }
      }

      const config: IRequestProp = {
        method: type,
        url: `${apiURl}${endpoint}`,
        // url: `https://apisportsviu.kiura.co/api/${endpoint}`,
        headers: headers,
      };

      if (body) {
        if (file) {
          const formData = new FormData();
          Object.keys(body).forEach(([key, value = []]) => {
            formData.append(key, JSON.stringify(body[key]));
            if (typeof value === "object" && value !== null) {
              try {
                value.forEach((value2: any) => {
                  formData.append(key, value2);
                });
              } catch (e) {
                formData.append(key, value);
              }
            } else {
              formData.append(key, value);
            }
          });
          config.data = formData;
        } else {
          config.data = body;
        }
      }

      const response = await axios(config);
      if (response.data.error) {
        setError(response.data.error);
        throw new Error(response.data.error);
      }
      setLoading((prevState) =>
        prevState.filter((item) => item !== `${type}__${endpoint}`)
      );
      setLoadedApi((value) => [...value, `${type}__${endpoint}`]);
      return response;
    } catch (error: any) {
      setLoading((prevState) =>
        prevState.filter((item) => item !== `${type}__${endpoint}`)
      );
      if (error.response) {
        if (error.response.status === 404 && error.response.data.msg === "Usuario no encontrado") {
          setError("Usuario no encontrado");
          throw new Error("Usuario no encontrado");
        } else {
          if (error.response.data.msg) {
            if (
              error.response.data.msg === "INVALID_TOKEN" ||
              error.response.data.msg === "MISSING_TOKEN"
            ) {
              // AsyncStorage.clear();
              // cookie.remove("token");
              // localStorage.clear();
              // window.location.replace("/login");
            }
              // Para otros errores, mantenemos el manejo genérico
              setError(error.response.data.msg);
              throw new Error(error.response.data.msg);
          } else {
            setError(
              "Error interno del servidor, actualiza la página e intente nuevamente."
            );
            throw new Error(
              "Error interno del servidor, actualiza la página e intente nuevamente."
            );
          }
        }
       
      } else {
        setError(
          "Error de conexión, actualiza la página e intente nuevamente."
        );
        throw new Error(
          "Error de conexión, actualiza la página e intente nuevamente."
        );
      }
    }
  };

  return {
    loadApi,
    loadingApi,
    errorApi,
    loggedApi,
    loadedApi,
  };
};
