"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Blog = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".blog-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const blogs = [
 /*   {
      id: 1,
      title: "Arrivée chez IRIUM Software",
      img: "/images/blog/thumbnail_irium.png",
      alt: "IRIUM Software",
      date: "12 Août 2024",
      url: "/blog/arrivee-chez-irium-software",
    },*/
    {
      id: 1,
      title: "Ouverture du site",
      img: "/images/blog/thumbnail_ouverture.png",
      alt: "Ouverture site",
      date: "03 Août 2024",
      url: "/blog/ouverture-du-site",
    },
  ];

  return (
    <div className="section blog section_" id="blog">
      <div className="content">
        <div className="title">
          <div className="title_inner">Derniers posts</div>
        </div>
        <div className="box-items blog-items">
          {blogs.map((blog) => (
            <div className="box-item" key={blog.id}>
              <div className="image">
                <Link href={blog.url}>
                  <img src={blog.img} alt={blog.alt} />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-book-outline" />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="desc">
                <div className="date">{blog.date}</div>
                <Link
                  href={blog.url}
                  className="name"
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Blog;
