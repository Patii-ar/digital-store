import "../css/Destaque.css";
import Section from "./Section";
import collection1 from "../public/collection-1.png";
import collection2 from "../public/collection-2.png";
import collection3 from "../public/collection-3.png";


const Card = import.meta.glob('../public/*.png', { eager: true });

 const imageElements = Object.values(Card).map((img) => (
  <div><img className="w-full"  src={img.default} /></div>
));




export default function Destaque () {
    return (
        <Section title="Coleções de Destaque">
            <div className="flex gap-3">
                 <img src={collection1} alt="" />
                <img src={collection2} alt="" />
                <img src={collection3} alt="" />
            </div>
             
        </Section>
            
    
    )
}