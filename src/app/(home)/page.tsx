import {CardContainer} from "@components/Containers";
import {BlogCard} from "@components/Cards";
import List, {ContactList} from "@components/List"
import {BLOG_POSTS} from "@app/(home)/latestBlog";
import UserInfo from "@app/(home)/(pages)/userInfo";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center px-10 lg:p-0"
    >
      <UserInfo />
      <CardContainer
        header="Check my latest blog posts"
        className=""
      >
        {
          BLOG_POSTS.map((key, index) => {
            return (
              <BlogCard key={index} postData={key}
                className=" "
              />
            )
          })
        }

      </CardContainer>
      <div className="w-11/12 lg:w-10/12
        flex flex-col items-center justify-center mt-60 md:gap-y-8
        p-20
      ">
        <h1 className="text-5xl">Say Hi!</h1>
        <p className="text-lg text-gray-400">
          Any question or remarks? Just write us a message!
        </p>
        <div className="
          flex justify-between mt-12 lg:max-h-[56rem]
          border shadow-md rounded-lg flex-wrap lg:flex-nowrap
        ">
          <div
            id="form "
            className="flex  grow text-sm min-w-[28rem] md:w-[37rem]
            "
          >
            <form
              id="form here"
              className="flex flex-col flex-1 gap-y-6 grow m-8  px-8 mb-20"
            >
              <div className="flex justify-between gap-4 mt-4">
                <div className="flex flex-col flex-1 items-stretch gap-y-2">
                  <h1>First Name</h1>
                  <input
                    className="border-b border-gray-400 py-2"
                    placeholder="eg. Lucas"
                  />
                </div>
                <div className="flex flex-col flex-1 items-stretch gap-y-2">
                  Last Name
                  <input
                    className="border-b border-gray-400 py-2"
                    placeholder="eg. Jones"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 items-stretch gap-y-2">
                Email
                <input
                  className="border-b border-gray-400 py-2"
                  placeholder="eg. lucas@gamil.com"
                />
              </div>
              <div className="
                flex flex-col flex-1 items-stretch gap-y-2
              ">
                your Message
                <textarea
                  className="border-b border-gray-400 py-2 h-28 items-start resize-none"
                  rows={5}
                />

              </div>
              <div className="flex flex-col items-end mt-28 mr-8">
                SEND MESSAGE
              </div>
            </form>
          </div>
          <div
            id="contact-info-container"
              className="
                flex flex-col grow m-7 lg:my-16 bg-[#212121] py-16 px-16
                rounded-xl min-w-[16.5rem] lg:max-w-[42rem]
            ">
              <div className="flex flex-col text-white ">
                <h1 className="text-2xl">Contact Information</h1>
                <p className="text-base text-gray-400 mt-4 max-w-[30rem]">
                  Fill up the form and our Team will get back to you within 24 hours.
                </p>
                <ul className="flex flex-col mt-12 gap-8">
                  <List list={ContactList}
                        liClass="flex"
                        className="flex gap-x-4"
                  />
                </ul>
              </div>
          </div>
          </div>
        </div>
    </main>
  );
}
