import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../utils/fetchData";

export default function CarForm() {
  const [loading, setLoading] = useState(false);
  const input = useRef();
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const form = new FormData(event.target);

    const formData = Object.fromEntries(form.entries());

    const res = await postData("cars", formData);
    const result = await res.json();
    if (result) {
      toast.success("Add Cart Success 😘 !!!");
      setLoading(false);
      input.current.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={input}>
      <label htmlFor="make" className="form-label">
        Make
      </label>
      <input name="make" type="text" className="form-control" />

      <label htmlFor="model" className="form-label">
        Model
      </label>
      <input name="model" type="text" className="form-control" />

      <label htmlFor="image" className="form-label">
        Image
      </label>
      <input name="image" type="text" className="form-control" />

      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea name="description" type="text" className="form-control" />
      <br />
      {loading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <button className="btn btn-primary" type="submit">
          Create Car
        </button>
      )}
    </form>
  );
}
