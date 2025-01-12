import "./App.css";
import InputField from "./components/InputField";

function App() {
  return (
    <div className=" bg-white flex flex-col items-start gap-4 h-screen rounded-xl p-6 ">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className=" space-y-4 w-full ">
      <InputField label="First Name" id="firstName" name="firstName" />
      <InputField label="Last Name" id="lastName" name="lastName" />
      <InputField label="Email Adress" id="email" name="email" type="email" />
      </form>

    </div>
  );
}

export default App;
