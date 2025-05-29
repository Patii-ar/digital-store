import "../css/Section.css"

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
                    {link && ( 
                        <a href={link.href} className="text-primary text-[18px] font-medium hover:underline">
                            {link.text}
                        </a>
                    )}
                </div>
            )}
            <div>{children}</div>
        </section>
    );
}

export default Section;