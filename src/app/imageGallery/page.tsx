import ImageGallery from "components/ImageGallery/ImageGallery";

const page = () => {
  return (
    <>
      <h1 className="text-8xl text-center uppercase font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-600  bg-clip-text">
        Image gallery
      </h1>
      <ImageGallery />
    </>
  );
};

export default page;
