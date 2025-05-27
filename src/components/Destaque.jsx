import "../css/Destaque.css";
import Section from "./Section";
import collection1 from "../public/collection-1.png";
import collection2 from "../public/collection-2.png";
import collection3 from "../public/collection-3.png";

export default function Destaque () {
    return (
        <div className="destaques">
            <Section title="Coleções de Destaque" titleAlign="left">
                <div className="flex gap-8 flex-wrap xl:flex-nowrap">
                    <img className="rounded-xl" src={collection1} alt="" />
                    <img className="rounded-xl" src={collection2} alt="" />
                    <img className="rounded-xl" src={collection3} alt="" />
                </div>
            </Section>
        </div>
    )
}