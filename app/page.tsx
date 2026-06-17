export default function Home() {
  const menuItems = [
    {
      name: "Americano",
      price: "60 บาท",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    },
    {
      name: "Latte",
      price: "70 บาท",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    },
    {
      name: "ชาไทย",
      price: "55 บาท",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800",
    },
    {
      name: "ครัวซองต์",
      price: "75 บาท",
      image:
        "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            KPS MENU
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            เมนูดิจิทัลสำหรับร้านอาหาร ร้านกาแฟ และธุรกิจรอบมหาวิทยาลัย
          </p>

          <a
            href="https://line.me"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-xl font-bold"
          >
            สั่งอาหารผ่าน LINE
          </a>
        </div>
      </section>

      {/* MENU */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          เมนูแนะนำ
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-green-600 font-bold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR MENU */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            สแกนดูเมนู
          </h2>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://kps-menu.vercel.app"
            alt="QR Menu"
            className="mx-auto"
          />

          <p className="mt-4 text-gray-600">
            สแกน QR เพื่อเปิดเมนูบนมือถือ
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            ที่ตั้งร้าน
          </h2>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl"
          >
            เปิด Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <h3 className="text-2xl font-bold">
          ร้านกาแฟตัวอย่าง
        </h3>

        <p className="mt-3">
          โทร 080-000-0000
        </p>

        <p className="text-gray-400 mt-2">
          Powered by KPS Menu
        </p>
      </footer>
    </main>
  );
}