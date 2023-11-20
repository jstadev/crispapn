import React, { useEffect } from "react";
import Modal from "react-modal";
import cancelImg from "../../../public/assets/img/cancel.svg";
// import blogQuote from "../../../public/assets/img/blog/quote.svg";
import UseData from "../../Hooks/UseData";
import Image from "next/image";


const Blog = () => {
  const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } = UseData();
  const handleModle = (id) => {
    handleBlogsData(id);
  };
  useEffect(() => {
    Modal.setAppElement("#modal");
  },[])
  return (
    <>
      <div className="row" id="modal">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article
              className="post-container"
              onClick={() => handleModle(item?.id)}
            >
              <a href={singleData?.description5} target="_blank">
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <Image src={item?.img} className="img-fluid" alt="item.title" />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item?.title.slice(0, 25)}...</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item?.description1.slice(0,100)}{item?.description2.slice(0,50)}...</p>
                </div>
              </div>
              </a> 
              {/* End .post-content */}
            </article>

            {/* Start ModalOneBlogContent */}
    
            {/* End  ModalOneBlogContent */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
