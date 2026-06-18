export default function Home() {
  const menus = [
    {
      name: "ข้าวกะเพราหมูกรอบ",
      price: "69 บาท",
      image: "/menu1.jpg",
    },
    {
      name: "สเต๊กไก่",
      price: "129 บาท",
      image: "/menu2.jpg",
    },
  ];

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            ร้านอาหารกำแพงแสน
          </h1>

          <p className="mb-6">
            อาหารอร่อย บรรยากาศดี ใกล้มหาวิทยาลัย
          </p>

          <a
            href="https://line.me"
            className="bg-green-500 px-6 py-3 rounded-lg"
          >
            สั่งอาหารผ่าน LINE
          </a>
        </div>
      </section>

      {/* Menu */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          เมนูแนะนำ
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {menus.map((item) => (
            <div
              key={item.name}
              className="border rounded-xl overflow-hidden shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-red-500 font-bold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            รีวิวลูกค้า
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              ⭐⭐⭐⭐⭐
              <p>อาหารอร่อยมาก</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              ⭐⭐⭐⭐⭐
              <p>บริการดี ราคาไม่แพง</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              ⭐⭐⭐⭐⭐
              <p>ร้านสวย เหมาะกับนักศึกษา</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          แผนที่ร้าน
        </h2>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          เปิด Google Maps
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <h3 className="text-xl font-bold">
          ร้านอาหารกำแพงแสน
        </h3>

        <p>โทร 080-000-0000</p>

        <p className="mt-3 text-gray-400">
          Powered by KPS Menu
        </p>
      </footer>
    </main>
  );
}
