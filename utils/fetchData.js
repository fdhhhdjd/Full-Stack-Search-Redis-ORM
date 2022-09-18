const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const postData = async (url, formData) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return res;
};
