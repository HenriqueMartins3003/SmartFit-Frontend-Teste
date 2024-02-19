import Button from "./button";
import InputsGroup from "./inputsGroup";

const Filter = () => {
  return (
    <div className="px-5">
      <div className="rounded-lg border-solid border-2 border-brand-lightGrey p-5 border-opacity-35">
        <div className="flex items-center gap-2">
          <img width={24} src="/icon-hour.png" />
          <p className="text-brand-lightGrey">Horário</p>
        </div>
        <h2 className="text-2xl text-brand-lightGrey mt-5 pb-2 border-b border-solid border-brand-lightGrey border-opacity-35">
          Qual período quer treinar ?
        </h2>
        <InputsGroup />

        <div className="flex flex-col items-center gap-3 mt-5">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="showClosedUnits"
              id="showClosedUnits"
              className="w-4 h-4"
            />
            <label htmlFor="showClosedUnits" className="text-black">
              Exibir unidades fechadas
            </label>
          </div>
          <h3>
            Resultados encontrados:{" "}
            <span className="font-semibold text-xl"> 0 </span>
          </h3>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <Button variant="primary">Encontrar Unidade</Button>
          <Button variant="outlined">Limpar</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
