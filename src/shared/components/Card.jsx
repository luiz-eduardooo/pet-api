const base = "card-lift bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs"


export function Card({ children, onClick, className = "" }) {
    return (
        <div className={`${base} ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}