const InputsGroup = () => {
  return (
    <div className="flex flex-col text-brand-lightGrey gap-5 mt-5">
      <div className="flex justify-between  border-b border-solid border-brand-lightGrey border-opacity-35">
        <div className="flex gap-2 py-2">
          <input
            type="radio"
            name="period"
            id="morning"
            value="morning"
            className="w-4"
          />
          <label htmlFor="morning">Manhã</label>
        </div>
        <p className="py-2">06:00 as 12:00</p>
      </div>
      <div className="flex justify-between  border-b border-solid border-brand-lightGrey border-opacity-35">
        <div className="flex gap-2 py-2">
          <input
            type="radio"
            name="period"
            id="afternoon"
            value="afternoon"
            className="w-4"
          />
          <label htmlFor="afternoon">Tarde</label>
        </div>
        <p className="py-2">12:01 as 18:00</p>
      </div>
      <div className="flex justify-between  border-b border-solid border-brand-lightGrey border-opacity-35">
        <div className="flex gap-2 py-2">
          <input
            type="radio"
            name="period"
            id="evening"
            value="evening"
            className="w-4"
          />
          <label htmlFor="evening">Noite</label>
        </div>
        <p className="py-2">18:01 as 23:00</p>
      </div>
    </div>
  );
};

export default InputsGroup;
