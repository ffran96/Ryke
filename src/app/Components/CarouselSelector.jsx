export default function CarouselSelector({ Array, CurrentCard }) {
  return (
    <div className="flex justify-center items-center my-4 md:hidden">
      <ul className="flex gap-2 justify-center items-center">
        {Array.map(({ id }) => (
          <li
            key={id}
            className={`${
              CurrentCard == id
                ? "w-3 h-3 bg-[#ffffff]"
                : "w-2 h-2 bg-[#b8b8b8]"
            } rounded-full transition-all ease-linear`}
          />
        ))}
      </ul>
    </div>
  );
}
