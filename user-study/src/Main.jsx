import Zalando from "./assets/zalando.png";
import CMP from "./CMP";
//TODO: add click events for pressing outside of cmp aka implicit content
function Main() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <img
        src={Zalando}
        alt="Zalando website"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <CMP className="z-10" />
    </div>
  );
}

export default Main;
