import { AnimatedCard } from "../ui/animated-card";

export function Certificate() {
  const testimonials = [
    {
      quote:
        "Akun I Kadek Buktiasa telah terverifikasi secara resmi oleh WPU Course. Maka dari itu WPU Course mengeluarkan sertifikat ini sebagai bukti bahwa yang bersangkutan sudah menyelesaikan Full Stack Next JS : Realtime Point Of Sale Apps by WPU Course.",
      name: "Sertifikat Full Stack Next JS : Realtime Point Of Sale Apps",
      designation: "WPU Course",
      src: "/certificates/wpu-course.png",
    },
    {
      quote:
        "Build Reliable & Fast Laundry Web App with React + PayloadCMS pada tanggal 17-20 Desember 2025 selama 8 Jam Pembelajaran dengan pemateri Arsadi Arsadi",
      name: "Mini Class React JS x PayloadCMS",
      designation: "Dunia Coding",
      src: "/certificates/dunia-coding.png",
    },
    {
      quote:
        "Panduan untuk mempelajari dasar-dasar pemrograman JavaScript dalam pemrograman web",
      name: "Belajar JavaScript",
      designation: "KelasFullstack",
      src: "/certificates/javascript.png",
    },
    {
      quote:
        "Mengenal dan belajar dasar-dasar CSS untuk fondasi awal belajar web development",
      name: "Belajar CSS",
      designation: "KelasFullstack",
      src: "/certificates/css.png",
    },
    {
      quote:
        "HTML merupakan pengetahuan umum yang harus dimiliki oleh setiap orang yang menggeluti bidang web programming. Dalam kelas ini, kamu akan belajar mulai dari bagaimana konsep dasar dan cara kerja dari HTML serta bagaimana penggunaannya dalam membangun sebuah tampilan website",
      name: "Belajar HTML",
      designation: "KelasFullstack",
      src: "/certificates/html.png",
    },
  ];
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-navy-text md:text-5xl md:w-1/3">
        Certificate
      </h2>
      <p className="text-navy-text">
        Berikut beberapa sertifikat yang saya terima dari berbagai kursus yang
        telah saya ikuti.
      </p>
      <AnimatedCard testimonials={testimonials} />
    </div>
  );
}
