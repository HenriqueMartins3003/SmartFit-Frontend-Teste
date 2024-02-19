import { LABELS } from "../contants/label";

const Labels = () => {
  return (
    <section className="px-5 mt-5">
      <div className="px-5 py-10 bg-brand-lightGrey rounded-md bg-opacity-25">
        {LABELS.map((label, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <h3 className="font-semibold text-xl text-center mt-5">
              {label.description}
            </h3>
            <div className="flex justify-center gap-8">
              {label.images.map((img, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <img src={img.url} alt={img.alt} width={50} height={50} />
                  <p className="text-center">{img.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Labels;
