export const loginApi = async (email: string, password: string) => {
  return new Promise<{ email: string; name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === "linh@gmail.com" && password === "123456") {
        resolve({
          email,
          name: "HR Admin",
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};
