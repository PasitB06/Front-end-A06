import Image from "next/image";
import styles from "./page.module.css";

import Banner from '@/components/Banner'
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg"/>
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg"/>
      </div>
    </main>
  )
}
