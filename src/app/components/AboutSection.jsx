"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Kỹ Năng",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Thiết Kế Canvas</li>
        <li>Edit Video</li>
        <li>Tư Vấn Khách Hàng</li>
        <li>Youtube</li>
        <li>Discord</li>
        <li>Website Blog</li>
      </ul>
    ),
  },
  {
    title: "Giáo Dục",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Học Vấn 8/12</li>
        <li> Có Hiểu Biết Sử Dụng Máy Tính</li>
      </ul>
    ),
  },
  {
    title: "Bản Thân",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Name : Huỳnh Tấn Hiếu</li>
        <li>Sinh Năm : 12/09/2006</li>
        <li>Địa Chỉ : 490 Trần Thủ Độ, Điện Nam Bắc, Điện Bàn, Quảng Nam</li>
        <li>Youtube : 5K5 Sub</li>
        <li>Discord : 9K Member</li>
        <li>Sở Thích : Trở Thành CEO Cho Website Nào Đó</li>
        <li>Cha : Huỳnh Tấn Tâm</li>
        <li>Mẹ : Đi Từ Nhỏ ( Không Biết )</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Tôi Là Huỳnh Tấn Hiếu, Hiện Tại Tôi Đang Tự Xây Dựng Thương Hiệu Riêng Cho Mình Tự Làm Youtube & Discord. Tôi Có Kinh Nghiệm Với Tư Vấn Khách Hàng, Sáng Tạo Nội Dung Video, Có Khả Năng Thiết Kế Canvas, Edit Video Capcut Và 1 Chút Làm Website Blog
            Tuy Nhiên Tôi Học Vấn Không Cao, Nhưng Tiếp Xúc Máy Tính Rất Sớm Và Kinh Doanh Bán Hàng Qua Game Tốt Nên Tôi Rất Giỏi Về Việc Tôi Đã Nêu Bên Trên.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Kỹ Năng{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Giáo Dục{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Thông Tin Bản Thân{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
