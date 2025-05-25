import "../css/Destaque.css"


const Card = import.meta.glob('../public/*.png', { eager: true });

 const imageElements = Object.values(Card).map((img) => (
  <div><img className="w-full"  src={img.default} /></div>
));




export default function Destaque () {
    return (
        <div>
            <h3>Coleções de Destaque</h3>
            {imageElements}
        </div>
    )
}