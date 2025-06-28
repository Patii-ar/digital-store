import { Link } from "react-router-dom";
import "../css/Section.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Section = ({children, title, titleAlign = "left", link}) => {
    return (
        <section className="w-full">
            {(title || link) && (
                <div className={`flex items-center justify-between titulo
                ${titleAlign === 'center' ? 'text-center' : 'text-left'}`
                }>
                    <h2 className="text-[24px] text-(--darkgray2) font-semibold">
                        {title}
                    </h2>
                    {link &&
                        <Link to={link.src}>
                            <h2 className="text-[var(--principal)] flex gap-3 items-center">
                                {link.text} <FaArrowRightLong /> 
                            </h2>
                        </Link>
                    }
                </div>
            )}
            <div>{children}</div>
        </section>
    );
}

export default Section;