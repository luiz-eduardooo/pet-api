const base = "font-bold text-zinc-900"

const tamanhos = {
    sm: "text-base",
    md: "text-lg"
}



export function Logo({tamanho = "md"}){
    const final = `${base} ${tamanhos[tamanho]}`
    return(
<span className={final}>
    🐾 <span>Mi</span> <span className="text-primary-500">Audota</span>
</span>
    )
}