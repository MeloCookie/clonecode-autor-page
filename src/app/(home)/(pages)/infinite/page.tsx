import axios, {AxiosResponse} from "axios";
import Link from "next/link";
import Image from "next/image"

interface TestDataDto{
  id: string,
  link: string,
  image: string,
  name: string
}

async function  gettext():  Promise<AxiosResponse<TestDataDto[]>> {
  // const  res =
  // let text = "";
  // res.data.map((item) => {
  //   text += item.name  + " | link : " + item.link + "\n";
  // });
  return await axios.get<Array<TestDataDto>>
  ("http://onboarding-test-env.eba-zjxbitqj.ap-northeast-2.elasticbeanstalk.com/v1/test")
}
export default async function infinite(){
  let res = await gettext();
  const data = res.data
  //17rem 가로, 14rem 세로
  return (
    <div
    id="infinite"
      className="flex w-11/12 justify-center items-center p-30 overflow-scroll mt-10 p-20 bg-[#212121]
    ">
      <div className="
        flex flex-col md:flex-row flex-wrap gap-4 w-full  bg-white
        justify-around items-center lg:max-w-[65rem] xl:max-w-full
      ">
        {
          data.map((key) => {
            return (
              <div
                key={key.id}
                className="flex flex-col m-8 md:max-w-[17rem] max-w-[24rem]
                max-h-[19rem] h-[19rem] justify-center items-center"
              >
                <Link
                  href={key.link}
                  className="flex flex-col  justify-between
                    md:max-w-[17rem] max-w-[20rem] max-h-[19rem] h-[19rem]
                  "
                >
                  <Image
                    src={key.image} alt=" " width="500" height="500"
                    className="flex h-full"
                  />
                  <p>id : {key.id}<br/>name : {key.name}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
