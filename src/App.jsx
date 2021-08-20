import React from "react";
import Main from "./component/main"; 
import Header from "./component/header";
import Footer from "./component/footer"

function App() {

  const[masakans,setMasakans] = React.useState([
    {
      nama_masakan : "sabana",
      image : "https://i.ytimg.com/vi/TDFGDCh7i7Q/maxresdefault.jpg",
      harga : "Rp55.000",
      rating : "10/10",
    },
    {
      nama_masakan : "siomay",
      image : "https://1.bp.blogspot.com/-1foTfkF_NEA/TtgBFU86YkI/AAAAAAAAAKA/Wi6nZrtKqME/s1600/40.+siomay.jpg",
      harga : "Rp10.000",
      rating : "9/10",
    },
    {
      nama_masakan : "martabak keju",
      image : "https://ramesia.com/wp-content/uploads/2017/12/cara-membuat-martabak-manis-keju.jpg",
      harga : "Rp13.000",
      rating : "9/10",
    },
    {
      nama_masakan : "ayam bakar",
      image : "https://th.bing.com/th/id/OIP.oHekD_7GUsZ23-AXERl5kgHaE7?pid=ImgDet&rs=1",
      harga : "Rp25.000",
      rating : "8/10",
    },
    {
      nama_masakan : "rendang",
      image : "https://th.bing.com/th/id/R.7c29b5cc92595058b71b5dc5538154a1?rik=PzI2rEhhKV9cUw&riu=http%3a%2f%2frecipemantra.com%2fimage%2fcatalog%2fhungryforever.com%2fchicken-rendand-recipe.jpg&ehk=vjtBjsKVbHKu3L1gMdHcIXNU4rmSWWmYelO%2b1DnpAqk%3d&risl=&pid=ImgRaw&r=0",
      harga : "Rp28.000",
      rating : "10/10",
    },
    {
      nama_masakan : "ayam geprek",
      image : "https://d99i6ad9lbm5v.cloudfront.net/uploads/image/file/2627/featured-65.jpg",
      harga : "Rp50.000",
      rating : "7/10",
    },
    {
      nama_masakan : "Nasi Goreng",
      image : "https://th.bing.com/th/id/R.71ab253ec07414f90f9affae79050205?rik=KsI02qdqQAQArg&riu=http%3a%2f%2fimg.jakpost.net%2fc%2f2016%2f06%2f24%2f2016_06_24_7079_1466755385._large.jpg&ehk=UkFtC26sl7O7owcmWdDjNdprvBHLnT35M%2f%2bKR25rSHk%3d&risl=&pid=ImgRaw&r=0",
      harga : "Rp30.000",
      rating : "6/10",
    },
    {
      nama_masakan : "kwetiau",
      image : "https://www.befren.com/wp-content/uploads/2018/10/Resep-Mudah-Membuat-Kwetiau-Goreng-Nikmat-befren.com_.jpg",
      harga : "Rp23.000",
      rating : "10/10",
    },
    {
      nama_masakan : "ketoprak",
      image : "https://th.bing.com/th/id/OIP.A8-DCyHkgEShQpoyb64YrgHaEj?pid=ImgDet&rs=1",
      harga : "Rp14.000",
      rating : "5/10",
    },
    {
      nama_masakan : "Nasi Uduk",
      image : "https://muslimobsession.com/wp-content/uploads/2018/09/Nasi-Uduk.jpg",
      harga : "Rp15.000",
      rating : "10/10",
    },
  ])
 
  return (
    <React.Fragment>
      <div className=' antialiased w-full bg-black px-15'> <p className=' text-center font-bold text-purple-600'>MENU PILIHAN TERBAIK DI SINI </p>
        <div className=''></div>
      </div>
      <div>
        <Header className='text-center'></Header>
      </div>
    
      <div className="col-span-5 grid grid-cols-5 gap-5 overflow-auto px-1 py-5 bg-purple-600">
            {masakans.map((masakan, index) => (
              <Main
                key={index}
                nama_masakan={masakan. nama_masakan}
                image={masakan.image}
                harga={masakan.harga}
                rating={masakan.rating}
              ></Main>
            ))}
          </div>
          <div>
        <Footer className='text-center'></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
