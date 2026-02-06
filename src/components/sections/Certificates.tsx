import { AnimatedCard } from "../ui/animated-card";

export default function Certificate() {
  const testimonials = [
    {
      quote:
        "Berhasil menyelesaikan pelatihan komprehensif membangun aplikasi 'Realtime Point Of Sale' (POS). Menguasai implementasi fitur modern Next.js, manajemen state yang kompleks, serta integrasi database untuk transaksi realtime.",
      name: "Sertifikat Full Stack Next JS : Realtime Point Of Sale Apps",
      designation: "WPU Course",
      src: "/certificates/wpu-course.png",
    },
    {
      quote:
        "Menyelesaikan studi kasus pembuatan Aplikasi Web Laundry. Berfokus pada integrasi Frontend React.js yang cepat dengan PayloadCMS sebagai Backend management sistem yang fleksibel dan scalable.",
      name: "Mini Class React JS x PayloadCMS",
      designation: "Dunia Coding",
      src: "/certificates/dunia-coding.png",
    },
    {
      quote:
        "Menguasai logika pemrograman fundamental JavaScript, manipulasi DOM, serta konsep asinkronus untuk menciptakan interaktivitas website yang dinamis dan fungsional.",
      name: "Belajar JavaScript",
      designation: "KelasFullstack",
      src: "/certificates/javascript.png",
    },
    {
      quote:
        "Memahami prinsip desain web modern menggunakan CSS, termasuk implementasi layouting (Flexbox/Grid) dan desain responsif agar tampilan web optimal di berbagai ukuran layar.",
      name: "Belajar CSS",
      designation: "KelasFullstack",
      src: "/certificates/css.png",
    },
    {
      quote:
        "Memiliki pemahaman mendalam tentang struktur semantik HTML5, standar aksesibilitas web, dan optimasi SEO on-page sebagai fondasi utama pengembangan web.",
      name: "Belajar HTML",
      designation: "KelasFullstack",
      src: "/certificates/html.png",
    },
  ];
  return (
    <div id="certificate" className="py-20">
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
