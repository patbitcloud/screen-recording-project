import Header from "@/components/Header";
import {dummyCards} from "@/constants";
import VideoCard from "@/components/VideoCard";

const Page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;
    return(
      <div className="wrapper page">
          <Header subHeader="patbitcloud007@gmail.com" title="Patrick | Full Stack Developer" userImg="/assets/images/pat.png"/>
          <section className="video-grid">
              {dummyCards.map((card) => (
                  <VideoCard key={card.id} {...card} />
              ))}
          </section>

      </div>
  )
}

export default Page;