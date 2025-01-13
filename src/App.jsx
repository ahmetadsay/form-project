import "./App.css";
import InputField from "./components/InputField";
import QueryType from "./components/QueryType";
import TextArea from "./components/TextArea";
import CheckBoxed from "./components/CheckBoxed";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className=" bg-white flex flex-col items-start gap-4 h-screen rounded-xl p-6 ">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className=" space-y-4 w-full ">
        <InputField label="First Name" id="firstName" name="firstName" />
        <InputField label="Last Name" id="lastName" name="lastName" />
        <InputField label="Email Adress" id="email" name="email" type="email" />
        <QueryType />
        <TextArea />
        <CheckBoxed />
        <button
          onClick={handleSubmit}
          className="bg-[#0C7B68] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
