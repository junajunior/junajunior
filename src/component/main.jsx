import React from 'react'


export default function Main(props){
   return(
      <article className="border p-5">
      <h1 className="font-semibold">{props.nama_masakan}</h1> 
      <img className="mt-5" src={props.image} /> 
      <p className="mt-5 truncate">{props.harga}</p> 
      <p className="mt-5 truncate">{props.rating}</p> 
      <div className="mt-5">
        <button className="inline-flex px-4 bg-gradient-to-r from-blue-400 to-blue-300 text-white py-2 rounded-md border">
          Selengkapnya
        </button>
      </div>
    </article>
   )
}