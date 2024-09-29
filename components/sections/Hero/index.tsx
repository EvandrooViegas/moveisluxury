import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
export default function Example() {
  return (
    <SectionContainer id="home" outside>
      <div className="h-[85vh] relative bg-black ">
        <video
          className="absolute inset-0 object-cover  w-full h-full z-[0]"
          loop
          autoPlay
          muted
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black/85">
          <div className="text-white  gap-8 flex flex-col items-center justify-center text-center md:p-0 p-6 ">
            <h4 className="md:text-5xl text-4xl font-black capitalize">
              materiais e qualidade luxuosa.
            </h4>
            <p className="md:text-2xl text-xl text-neutral-200 capitalize md:max-w-[50%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text
              ever since the 1500s
            </p>
            <ContactUsBtn outline whiteOutline />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
