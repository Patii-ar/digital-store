import "../css/Section.css"

const Section = ({children, title, titleAlign="left", link}) => {
    return (
        <section className="w-full flex-col align-center">
            {(title || link) && (
                <div className={`'flex items-center justify-between mb-4',
                    ${titleAlign === 'center' ? 'flex-col gap-2 text-center' : 'flex-row'}`}>
                    
                    <h2 className="text-[24px] text-dark-gray-2 font-semibold">
                        {title}
                    </h2>
                        {link && (
                    <a href={link.href}
                        className="text-primary text-[18px] font-medium hover:underline">
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