function Tarjeta() {
  return (
    <div>
      <section className="w-[90%] max-w-md mx-auto bg-white shadow-2xl md:flex md:rounded-2xl md:max-w4xl">
        <article className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-10 text-white text-center md:rounded-2xl md:w1-/2 md:grid md:content-center">
          <p className="text-xl font-bold text-light">tu resultado</p>

          <div className="w-36 aspect-square bg-gradien-to-b from-violet-blue to-persian-blue mx-auto my-8 grid content-center md:w-56">
            <p className="text-5xl font-bold mb-3 md:text-7xl">76</p>
            <p className="font-bold text-light-lavender">of de 100</p>
          </div>
          <h3 className="text-3xl mb-4 font-bold">great</h3>
          <p className="text-light-lavender">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            debitis voluptatem voluptatibus magnam maiores nemo obcaecati,
            labore ut repellendus deserunt commodi enim pariatur, non libero
            cumque eius soluta, autem id.
          </p>
        </article>

        <article className="p-10 grid gap-6 md:w-1/2">
          <h3 className="text-xl font-bold">Sumary</h3>
          <div className="bg-light-red/5 rounded-xl flex py-5 px-6 item-center">
            <img src="/public/Logos/logo.png" />
            <p className="ml-3 teext-light-red text-lg"> Reaction</p>
            <p className="ml auto font.bold text.dark-gray-blue">
              <span>78</span>
              <span className="text-dar-gray-blue/70">/ 45</span>
            </p>
          </div>
          <div className="bg-blue-red/5 rounded-xl flex py-5 px-6 item-center">
            <img src="/public/Logos/logo.png" />
            <p className="ml-3 teext-light-red text-lg"> Reaction</p>
            <p className="ml auto font.bold text.dark-gray-blue">
              <span>78</span>
              <span className="text-dar-gray-blue/70">/ 45</span>
            </p>
          </div>

          <div className="bg-orange-red/4 rounded-xl flex py-5 px-6 item-center">
            <img src="/public/Logos/logo.png" />
            <p className="ml-3 teext-light-red text-lg"> Reaction</p>
            <p className="ml auto font.bold text.dark-gray-blue">
              <span>78</span>
              <span className="text-dar-gray-blue/70">/ 45</span>
            </p>
          </div>
          <div className="bg-green-red/5 rounded-xl flex py-5 px-6 item-center">
            <img src="/public/Logos/logo.png" />
            <p className="ml-3 teext-light-red text-lg"> Reaction</p>
            <p className="ml auto font.bold text.dark-gray-blue">
              <span>78</span>
              <span className="text-dar-gray-blue/70">/ 45</span>
            </p>
          </div>
          <a href="#" className="bg-dark-gray-blue text-white rounded-full py-5 text-center font-bold hover:bg-grad-red">

          </a>
        </article>
      </section>
    </div>
  );
}

export default Tarjeta;
