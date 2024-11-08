const medicalHousingData = [
  {
    id: 1,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/400-0-0-0-304-112-84151bd0d96a186864a65621a8f5340ee3536822f8a701af3/20240206132947-novascotia.png",
  },
  {
    id: 2,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2892-840-168b1a610e6b35865c932c532ad57b1913be459dc8c675820/20240206122319-logoipoans.png",
  },
  {
    id: 3,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2922-526-ed5a2ad4ca7256d020f1adcb4bc7ce87a701b4a74c429f70c/20230920153545-mahc-logo-vector.png",
  },
  {
    id: 4,
    title: "medicine",
    image:
      "https://www.medshousing.com/fichiersUploadOpt/400-0-0-0-150-165-92d1804f98b0ad6eacb4e8564d1fe194d5821ed13f8896a52/20221108074125-logocfms-femc-thumbnail.jpg",
  },
];

const Medhouse = () => {
  return (
    <div className="Medhousing mt-20">
      <div className="text-center">
        <h2 className="text-black font-bold text-lg md:text-xl">
          MedsHousing.com
        </h2>
        <span className="text-sm md:text-base">Is the Proud partner of:</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {medicalHousingData.map((housing) => (
          <div key={housing.id} className="med_img flex flex-col items-center">
            {housing.imageUrl && (
              <img
                src={housing.imageUrl}
                alt={housing.name}
                className="w-32 sm:w-36 md:w-40 lg:w-48 object-contain" 
              />
            )}
            {housing.image && (
              <img
                src={housing.image}
                alt={housing.title || ""}
                className="w-16 sm:w-20 md:w-24 lg:w-28object-contain" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medhouse;
