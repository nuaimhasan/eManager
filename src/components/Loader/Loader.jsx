import "./Loader.css";

export default function Loader() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
